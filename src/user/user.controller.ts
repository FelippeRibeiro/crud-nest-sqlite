import { Controller } from '@nestjs/common';
import {
  Body,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common/decorators';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: number) {
    return this.userService.deleteById(id);
  }
}

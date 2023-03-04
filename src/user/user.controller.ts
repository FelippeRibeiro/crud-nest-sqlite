import { Controller } from '@nestjs/common';
import { Body, Get, Post, Query } from '@nestjs/common/decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userCrud: UserService) {}

  @Get('/ping')
  ping(): string {
    return 'pong';
  }

  @Get('/getAll')
  async getAll() {
    return this.userCrud.getAll();
  }

  @Post('/insert')
  async create(@Body() datas) {
    console.log(datas);
    return this.userCrud.create(datas);
  }
}

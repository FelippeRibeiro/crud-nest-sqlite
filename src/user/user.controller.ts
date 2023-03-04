import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userCrud: UserService) {}

  @Get('/ping')
  ping(): String {
    return 'pong';
  }

  @Get('/getAll')
  async getAll() {
    return this.userCrud.getAll();
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

import { PrismaService } from './prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaClient],
})
export class AppModule {}

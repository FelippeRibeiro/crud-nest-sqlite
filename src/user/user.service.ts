import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async getAll(): Promise<object> {
    return {
      user: await this.prisma.users.findMany(),
    };
  }

  async create(): Promise<Boolean> {
    return true;
  }
}

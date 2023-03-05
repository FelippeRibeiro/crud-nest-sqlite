import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaClient) {}
  async getStatus(): Promise<any> {
    return 'pong';
  }
}

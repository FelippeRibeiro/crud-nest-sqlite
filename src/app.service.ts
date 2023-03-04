import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaClient) {}
  async getHello(): Promise<any> {
    // const user = await this.prisma.users.create({
    //   data: { nome: 'Felipe', email: 'felipper43@gmail.com', idade: 20 },
    // });
    // await this.prisma.telefone.create({
    //   data: { telefone: '71993277415', usersId: user.id },
    // });

    // const query = await this.prisma.users.findMany({
    //   include: { telefones: true },
    // });

    // await this.prisma.users.delete({ where: { id: 6 } });
    return await this.prisma.users.findMany({});
  }
}

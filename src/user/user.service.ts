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

  async create(dados: {
    nome: string;
    email: string;
    idade: number;
    telefone: string;
  }): Promise<boolean> {
    try {
      await this.prisma.users.create({
        data: {
          nome: dados.nome,
          email: dados.email,
          idade: dados.idade,
          telefone: dados.telefone,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

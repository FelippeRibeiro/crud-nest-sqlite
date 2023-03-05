import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async getAll(): Promise<object[]> {
    const userList = await this.prisma.users.findMany();
    return userList;
  }

  async getById(id: number): Promise<object> {
    const user = await this.prisma.users.findFirst({
      where: { id: Number(id) },
    });
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<object> {
    const newUser = await this.prisma.users.create({
      data: {
        nome: createUserDto.nome,
        email: createUserDto.email,
        idade: createUserDto.idade,
        senha: createUserDto.senha,
        telefone: createUserDto.telefone,
      },
    });
    return newUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<object> {
    const updatedUser = await this.prisma.users.update({
      where: { id: Number(id) },
      data: {
        ...updateUserDto,
      },
    });
    return updatedUser;
  }

  async deleteById(id: number): Promise<object> {
    const deletedUser = await this.prisma.users.delete({
      where: { id: Number(id) },
    });
    return deletedUser;
  }
}

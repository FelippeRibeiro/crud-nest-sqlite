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
    const user = await this.prisma.users.findById(id);
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<object> {
    const newUser = await this.prisma.create(createUserDto);
    return newUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<object> {
    const updatedUser = await this.prisma.update(id, updateUserDto);
    return updatedUser;
  }

  async deleteById(id): Promise<object> {
    const deletedUser = await this.prisma.delete(id);
    return deletedUser;
  }
}

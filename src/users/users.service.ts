import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersRepository: typeof User,
  ) {}

  async getAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async getById(id: number): Promise<User> {
    return this.usersRepository.findByPk(id);
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto);
    return newUser;
  }

  async remove(id: number): Promise<void> {
    const user = await this.getById(id);
    await user.destroy();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.getById(id);
    return 'none';
  }
}

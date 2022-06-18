import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async getAll(): Promise<User[]> {
    return this.usersRepository.findAll({ include: { all: true } });
  }

  async getById(id: number): Promise<User> {
    return this.usersRepository.findByPk(id);
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto);
    const role = await this.roleService.getRoleByValue('USER');
    await newUser.$set('roles', [role.id]);
    newUser.roles = [role];
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

  async getUsersByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }
}

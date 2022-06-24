import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';
import { RolesService } from '../roles/roles.service';
import { CartService } from '../cart/cart.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersRepository: typeof User,
    private roleService: RolesService,
    private cartService: CartService,
    private jwtService: JwtService,
  ) {}

  async getAll(): Promise<User[]> {
    return this.usersRepository.findAll({ attributes: ['id', 'email', 'isBanned']});
  }

  async getById(id: number): Promise<User> {
    const user = await this.usersRepository.findByPk(id, {include: {all: true}});
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto);
    const role = await this.roleService.getRoleByValue('USER');
    await newUser.$set('roles', [role.id]);
    newUser.roles = [role];
    await this.cartService.create(newUser.id);
    return newUser;
  }

  async remove(id: number): Promise<void> {
    const user = await this.getById(id);
    const userCart = await this.cartService.getById(user.cart.id);
    await userCart.destroy();
    await user.destroy({ force: true });
  }

  async changeMyPassword(dto: UpdateUserDto, token: string) {
    const userToken = await this.jwtService.verify(token);
    const _user = await this.getById(userToken.id);
    const hashPassword = await bcrypt.hash(dto.password, 5);
    await _user.update({
      password: hashPassword,
    });
    return 'Succesfully changed';
  }

  async changePasswordAdmin(dto: UpdateUserDto) {
    const user = await this.getById(dto.id);
    const hashPassword = await bcrypt.hash(dto.password, 5);

    const dtoUser = await this.getById(dto.id);
    await dtoUser.update({
      ...dto,
      password: hashPassword,
    });
    return 'Succesfully changed';
  }

  async getUsersByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.usersRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
  }

  async ban(dto: BanUserDto) {
    const user = await this.usersRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (user.isBanned === true) {
      user.isBanned = false;
      return await user.save();
    }
    user.isBanned = true;
    await user.save();
    return user;
  }
}

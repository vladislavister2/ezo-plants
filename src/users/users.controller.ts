import {
  Body,
  Controller,
  Delete,
  ExecutionContext,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Logger,
  LoggerService,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ChangePasswordGuard } from '../auth/change-password.guard';
import { AuthToken } from './user.decorator';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    this.logger.log('Getting all users by ADMIN');
    return this.usersService.getAll();
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get(':id')
  getOne(@Param('id') id: number) {
    try {
      this.logger.log(`Getting user with id - ${id}`);
      return this.usersService.getById(id);
    } catch (e) {
      this.logger.error(`Error while getting user with id - ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    try {
      this.logger.log('Creating user via dto');
      return this.usersService.create(createUserDto);
    } catch (e) {
      this.logger.error('Error while creating user');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    try {
      this.logger.log(`Deleting user with id ${id}`);
      return this.usersService.remove(id);
    } catch (e) {
      this.logger.error('Error while deleting user');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/changePasswordAdmin')
  changePasswordAdmin(@Body() dto: UpdateUserDto) {
    try {
      this.logger.log('Changing password with admin token');
      return this.usersService.changePasswordAdmin(dto);
    } catch (e) {
      this.logger.error('Error while changing password');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UseGuards(ChangePasswordGuard)
  @Put('/changePassword')
  changeMyPassword(@Body() dto: UpdateUserDto, @AuthToken() token: string) {
    try {
      this.logger.log('Changing password by user');
      return this.usersService.changeMyPassword(dto, token);
    } catch (e) {
      this.logger.error('Error while changing password');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/role')
  addRole(@Body() dto: AddRoleDto) {
    try {
      this.logger.log('Adding role to user');
      return this.usersService.addRole(dto);
    } catch (e) {
      this.logger.error('Error while changing password');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/ban')
  ban(@Body() dto: BanUserDto) {
    try {
      this.logger.log('Adding role to user');
      return this.usersService.ban(dto);
    } catch (e) {
      this.logger.error('Error while changing password');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

import {
  Body,
  Controller,
  Delete,
  ExecutionContext,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put, Req,
  UseGuards
} from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ChangePasswordGuard } from '../auth/change-password.guard';
import { AuthToken } from "./user.decorator";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.usersService.getById(id);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/changePasswordAdmin')
  changePasswordAdmin(@Body() dto: UpdateUserDto) {
    return this.usersService.changePasswordAdmin(dto);
  }

  @UseGuards(ChangePasswordGuard)
  @Put('/changePassword')
  changeMyPassword(
    @Body() dto: UpdateUserDto,
    @AuthToken() token: string,
  ) {
    return this.usersService.changeMyPassword(dto, token);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }
}

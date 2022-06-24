import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  LoggerService,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateUserRolesDto } from './dto/update-role.dto';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Roles('ADMIN')
@UseGuards(RolesGuard)
@Controller('roles')
export class RolesController {
  constructor(
    private roleService: RolesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    try {
      this.logger.log('Creating new Role');
      return this.roleService.createRole(dto);
    } catch (e) {
      this.logger.error('Error while creating new Role');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    try {
      this.logger.log(`Getting role by value ${value}`);
      return this.roleService.getRoleByValue(value);
    } catch (e) {
      this.logger.error(`Error while Getting role by value ${value}`);
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

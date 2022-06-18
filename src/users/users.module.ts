import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [SequelizeModule.forFeature([User, Role]), RolesModule],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

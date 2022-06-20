import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';
import { UserRoles } from '../roles/user-roles.model';
import { Cart } from '../cart/cart.model';
import { CartModule } from '../cart/cart.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Cart]),
    RolesModule,
    CartModule,
  ],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

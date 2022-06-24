import { forwardRef, Logger, Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';
import { UserRoles } from '../roles/user-roles.model';
import { Cart } from '../cart/cart.model';
import { CartModule } from '../cart/cart.module';
import { AuthModule } from "../auth/auth.module";
import { JwtModule } from "@nestjs/jwt";
import { ExecutionContext } from "@nestjs/common/interfaces/features/execution-context.interface";
import { WinstonModule } from "nest-winston";

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Cart]),
    RolesModule,
    CartModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
    forwardRef(() => AuthModule),
    WinstonModule,
  ],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

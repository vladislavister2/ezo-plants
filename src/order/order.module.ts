import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './order.model';
import { UsersModule } from "../users/users.module";
import { User } from "../users/users.model";

@Module({
  imports: [SequelizeModule.forFeature([Order, User])],
  exports: [OrderService],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}

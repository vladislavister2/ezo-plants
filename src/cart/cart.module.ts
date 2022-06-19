import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { CartProducts } from './cart-products.model';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

@Module({
  imports: [SequelizeModule.forFeature([Cart, Product, CartProducts])],
  exports: [CartService],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}

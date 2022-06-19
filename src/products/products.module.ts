import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './products.model';
import { Category } from '../category/category.model';
import { CategoryProducts } from '../category/category-products.model';
import { CategoryModule } from '../category/category.module';
import { CartModule } from "../cart/cart.module";
import { CartService } from "../cart/cart.service";

@Module({
  imports: [
    SequelizeModule.forFeature([Product, Category, CategoryProducts]),
    CategoryModule,
    CartModule,
  ],
  exports: [ProductsService],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}

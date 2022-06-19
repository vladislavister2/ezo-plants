import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryProducts } from './category-products.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, Category, CategoryProducts])],
  exports: [CategoryService],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}

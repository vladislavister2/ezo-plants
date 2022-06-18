import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './products.model';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [SequelizeModule.forFeature([Product])],
})
export class ProductsModule {}

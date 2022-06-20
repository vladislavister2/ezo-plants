import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from "sequelize-typescript";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productsRepository.findAll();
  }

  async getById(id: string): Promise<Product> {
    return this.productsRepository.findByPk(id);
  }

  async create(createProductDto: CreateProductDto) {
    const newUser = await this.productsRepository.create(createProductDto);
    return newUser;
  }

  async remove(id: string): Promise<void> {
    const product = await this.getById(id);
    await product.destroy();
  }

  async update(id: string, dto: UpdateProductDto) {
    const user = await this.getById(id);
    return user.update(dto);
  }
}

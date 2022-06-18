import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from '../entity/product.entity';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async getById(id: string): Promise<Product> {
    return this.productsRepository.findOneById(id);
  }

  async create(createProductDto: CreateProductDto) {
    const newUser = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(newUser);
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update(id, updateProductDto);
  }
}

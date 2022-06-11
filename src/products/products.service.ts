import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  create(productDto: CreateProductDto) {
    this.products.push({
      ...productDto,
      id: Date.now().toString(),
    });
  }

  delete(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (Number(this.products[i].id) === Number(id)) {
        this.products.splice(i, 1);
        return 'Deleted successfully';
      }
    }
    return 'Deleted unsuccessfully';
  }

  update(id: number, productDto: UpdateProductDto) {
    for (let i = 0; i < this.products.length; i++) {
      if (Number(this.products[i].id) === Number(id)) {
        this.products[i].title = productDto.title;
        this.products[i].price = productDto.price;
        return 'Updated successfully';
      }
    }
    return 'Updated unsuccessfully';
  }
}

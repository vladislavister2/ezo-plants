import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryProducts } from './category-products.model';
import { AddProductToCategoryDto } from './dto/add-product-to-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryRepository: typeof Category,
    @InjectModel(CategoryProducts)
    private categoryProductsRepository: typeof CategoryProducts,
  ) {}

  async getAll(): Promise<Category[]> {
    return this.categoryRepository.findAll({ include: { all: true } });
  }

  async getById(id: number): Promise<Category> {
    return this.categoryRepository.findByPk(id);
  }

  async create(dto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(dto);
    return category;
  }

  async remove(id: number): Promise<void> {
    const category = await this.getById(id);
    await category.destroy();
  }

  async update(id: number, dto: CreateCategoryDto) {
    const category = await this.getById(id);
    return category.update(dto);
  }

  async addProductToCategory(dto: AddProductToCategoryDto) {
    const add = await this.categoryProductsRepository.create(dto);
    return add;
  }

  async deleteProductFromCategory(id: number) {
    const deletion = await this.getById(id);
    await deletion.destroy();
  }

  async showAllCategoryProducts(): Promise<CategoryProducts[]> {
    const all = await this.categoryProductsRepository.findAll({
      include: { all: true },
    });
    return all;
  }
}

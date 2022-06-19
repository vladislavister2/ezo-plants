import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./category.model";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateUserDto } from "../users/dto/update-user.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryRepository: typeof Category,
  ) {}

  async getAll(): Promise<Category[]> {
    return this.categoryRepository.findAll({ include: { all: true } });
  }

  async getById(id: number): Promise<Category> {
    return this.categoryRepository.findByPk(id);
  }

  async create(dto: CreateCategoryDto) {
    const newUser = await this.categoryRepository.create(dto);
    return newUser;
  }

  async remove(id: number): Promise<void> {
    const user = await this.getById(id);
    await user.destroy();
  }

  async update(id: number, dto: CreateCategoryDto) {
    const user = await this.getById(id);
    return user.update(dto);
  }

}

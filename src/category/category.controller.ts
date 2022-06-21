import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AddProductToCategoryDto } from './dto/add-product-to-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/addProductToCategory')
  addProduct(@Body() dto: AddProductToCategoryDto) {
    return this.categoryService.addProductToCategory(dto);
  }

  @Delete(':id')
  deleteProductFromCategory(@Param('id') id: number) {
    return this.categoryService.deleteProductFromCategory(id);
  }

  @Get(':showAllCategoryProducts')
  show() {
    return this.categoryService.showAllCategoryProducts();
  }

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.categoryService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoryService.remove(id);
  }

  @Put(':id')
  update(@Body() dto: UpdateCategoryDto, @Param('id') id: number) {
    return this.categoryService.update(id, dto);
  }


}

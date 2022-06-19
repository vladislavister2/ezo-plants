import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post, Put
} from "@nestjs/common";
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateUserDto } from "../users/dto/update-user.dto";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

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
  update(@Body() dto: CreateCategoryDto, @Param('id') id: number) {
    return this.categoryService.update(id, dto);
  }
}

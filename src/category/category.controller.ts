import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  LoggerService,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AddProductToCategoryDto } from './dto/add-product-to-category.dto';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Post('/addProductToCategory')
  addProduct(@Body() dto: AddProductToCategoryDto) {
    try {
      this.logger.log(`Adding product with id - ${dto.productId}`);
      return this.categoryService.addProductToCategory(dto);
    } catch (e) {
      this.logger.error(
        `Error while adding product with id - ${dto.productId}`,
      );
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  deleteProductFromCategory(@Param('id') id: number) {
    try {
      this.logger.log(`Deleting product with id - ${id}`);
      return this.categoryService.deleteProductFromCategory(id);
    } catch (e) {
      this.logger.error(`Error while deleting product with id - ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':showAllCategoryProducts')
  show() {
    try {
      this.logger.log(`Showing all category-products`);
      return this.categoryService.showAllCategoryProducts();
    } catch (e) {
      this.logger.error(`Error while showing all category-products`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  getAll() {
    try {
      this.logger.log(`Getting all products`);
      return this.categoryService.getAll();
    } catch (e) {
      this.logger.error(`Error while getting all products`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    try {
      this.logger.log(`Getting product with id - ${id}`);
      return this.categoryService.getById(id);
    } catch (e) {
      this.logger.error(`Error while getting product with id - ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCategoryDto) {
    try {
      this.logger.log(`Creating product with title - ${dto.title}`);
      return this.categoryService.create(dto);
    } catch (e) {
      this.logger.error(`Error while creating product with title - ${dto.title}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    try {
      this.logger.log(`Deleting product with id - ${id}`);
      return this.categoryService.remove(id);
    } catch (e) {
      this.logger.error(`Error while deleting product with id - ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put(':id')
  update(@Body() dto: UpdateCategoryDto, @Param('id') id: number) {
    try {
      this.logger.log(`Updating category with id - ${id}`);
      return this.categoryService.update(id, dto);
    } catch (e) {
      this.logger.error(`Error updating category product with id - ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

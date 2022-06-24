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
  UseGuards,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { UsersService } from '../users/users.service';
import { BannedUserGuard } from '../auth/bannedUser.guard';

@Controller('products')
@UseGuards(BannedUserGuard)
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Get()
  getAll(): Promise<Product[]> {
    try {
      this.logger.log('Getting all products');
      return this.productsService.getAll();
    } catch (e) {
      this.logger.error('Error while getting all products');
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
  getOne(@Param('id') id: string): Promise<Product> {
    try {
      this.logger.log(`Getting product with id ${id}`);
      return this.productsService.getById(id);
    } catch (e) {
      this.logger.error(`Error while getting product with id ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    try {
      this.logger.log(`Creating new product named ${createProductDto.title}`);
      return this.productsService.create(createProductDto);
    } catch (e) {
      this.logger.error(
        `Error while creating new product named ${createProductDto.title}`,
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

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    try {
      this.logger.log('Getting all products');
      return this.productsService.remove(id);
    } catch (e) {
      this.logger.error('Error while getting all products');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    try {
      this.logger.log('Updating all products');
      return this.productsService.update(id, dto);
    } catch (e) {
      this.logger.error('Error while updating all products');
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

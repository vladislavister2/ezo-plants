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
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartProductsDto } from './dto/UpdateCartProducts.dto';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Get()
  getAll() {
    return this.cartService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    try {
      this.logger.log(`Getting cart with id - ${id}`);
      return this.cartService.getById(id);
    } catch (e) {
      this.logger.error(`Error while getting cart with id - ${id}`);
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
  deleteProduct(@Param('id') id: number) {
    try {
      this.logger.log(`Deleting product with id - ${id}`);
      return this.cartService.removeProductFromCart(id);
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
  addProduct(@Body() dto: UpdateCartProductsDto, @Param('id') id: number) {
    try {
      this.logger.log(`Adding product with id - ${id}`);
      return this.cartService.addProductToCart(id, dto);
    } catch (e) {
      this.logger.error(`Error while adding product with id - ${id}`);
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

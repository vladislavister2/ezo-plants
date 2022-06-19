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
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartProductsDto } from "./dto/UpdateCartProducts.dto";
import { CartService } from "./cart.service";

@Controller('category')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getAll() {
    return this.cartService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.cartService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCartDto) {
    return this.cartService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.cartService.removeProductFromCart(id);
  }

  @Put(':id')
  update(@Body() dto: UpdateCartProductsDto, @Param('id') id: number) {
    return this.cartService.addProductToCart(id, dto);
  }
}

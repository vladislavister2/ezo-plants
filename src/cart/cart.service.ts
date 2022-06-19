import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartProductsDto } from './dto/UpdateCartProducts.dto';
import { CartProducts } from './cart-products.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart)
    private cartRepository: typeof Cart,
    @InjectModel(CartProducts)
    private cartProductsRepository: typeof CartProducts,
  ) {}

  async getAll(): Promise<Cart[]> {
    return this.cartRepository.findAll({ include: { all: true } });
  }

  async getById(id: number): Promise<Cart> {
    return this.cartRepository.findByPk(id);
  }

  async create(dto: CreateCartDto) {
    const newCart = await this.cartRepository.create(dto);
    return newCart;
  }

  async addProductToCart(id: number, dto: UpdateCartProductsDto) {
    const cartProducts = await this.getById(id);
    return cartProducts.update(dto);
  }

  async getCartProductById(id: number): Promise<CartProducts> {
    return this.cartProductsRepository.findByPk(id);
  }

  async removeProductFromCart(id: number) {
    const cartProduct = await this.getCartProductById(id);
    await cartProduct.destroy();
  }
}

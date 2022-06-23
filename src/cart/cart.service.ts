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

  async create(userId: number) {
    const newCart = await this.cartRepository.create({ userId });
    return newCart;
  }

  async delete(cartId: number): Promise<void>{
    const cart = await this.getById(cartId);
    return cart.destroy();
  }


  async getCartProductsById(id: number): Promise<Cart> {
    return this.cartRepository.findByPk(id);
  }

  async addProductToCart(id: number, dto: UpdateCartProductsDto) {
    const newCart = await this.cartRepository.findByPk(id);
    const cartProducts = await this.getCartProductsById(id);
    await newCart.$add('products', [cartProducts.id]);
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

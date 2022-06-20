import { IsNotEmpty } from 'class-validator';

export class UpdateCartProductsDto {
  readonly id: number;

  @IsNotEmpty()
  readonly cartId: number;

  @IsNotEmpty()
  readonly productId: number;
}

import { IsNotEmpty } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  readonly cartId: number;

  @IsNotEmpty()
  readonly productId: number;
}

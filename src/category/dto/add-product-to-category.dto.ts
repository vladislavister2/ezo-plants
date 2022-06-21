import { IsNotEmpty, Length } from 'class-validator';

export class AddProductToCategoryDto {
  @IsNotEmpty()
  readonly categoryId: number;

  @IsNotEmpty()
  readonly productId: number;
}

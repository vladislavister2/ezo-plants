import { IsNumberString } from 'class-validator';

export class CreateProductDto {
  readonly title: string;

  @IsNumberString()
  readonly price: string;
}

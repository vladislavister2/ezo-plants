import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  readonly cartId: number;

  @IsNotEmpty()
  readonly city: string;

  @IsNotEmpty()
  readonly telephone: number;

  @IsNotEmpty()
  @MinLength(2)
  readonly firstName: string;

  @MinLength(2)
  @IsNotEmpty()
  readonly lastName: string;

  readonly isDone: boolean;
}

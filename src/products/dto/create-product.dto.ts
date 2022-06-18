import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNumberString()
  readonly price: string;
}

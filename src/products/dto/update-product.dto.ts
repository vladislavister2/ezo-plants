import { IsNumberString } from "class-validator";

export class UpdateProductDto {
  readonly title: string;

  @IsNumberString()
  readonly price: string;
}

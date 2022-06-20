import { IsNotEmpty, IsNumberString } from "class-validator";

export class UpdateProductDto {

  readonly title: string;

  readonly price: number;

  readonly isAvailable: boolean;
}

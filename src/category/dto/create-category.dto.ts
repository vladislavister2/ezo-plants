import { IsNotEmpty, Length } from "class-validator";

export class CreateCategoryDto{
  @Length(3)
  @IsNotEmpty()
  readonly title: string;
}

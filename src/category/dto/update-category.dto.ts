import { IsNotEmpty, Length } from "class-validator";

export class UpdateCategoryDto{
  @Length(3)
  @IsNotEmpty()
  readonly title: string;
}

import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  // cart: products[];
}

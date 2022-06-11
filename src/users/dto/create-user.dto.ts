import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  readonly login: string;

  @IsNotEmpty()
  readonly password: string;

  @IsEmail()
  readonly mail: string;

  // cart: products[];
}

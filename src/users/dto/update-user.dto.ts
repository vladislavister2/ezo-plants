import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDto {
  readonly login: string;

  @IsNotEmpty()
  readonly password: string;

  @IsEmail()
  readonly mail: string;
}

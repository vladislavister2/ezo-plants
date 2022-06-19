import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  readonly password?: string;

  @IsEmail()
  readonly email: string;
}

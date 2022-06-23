import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateUserDto {
  readonly id: number;

  @IsNotEmpty()
  readonly password: string;
}

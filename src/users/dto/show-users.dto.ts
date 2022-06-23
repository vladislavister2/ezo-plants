import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class ShowUsersDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(4)
  readonly password: string;

  readonly isBanned: boolean;
}

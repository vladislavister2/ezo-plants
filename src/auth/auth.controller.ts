import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  LoggerService,
  Post,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    try {
      this.logger.log(`Log in user with email - ${userDto.email}`);
      return this.authService.login(userDto);
    } catch (e) {
      this.logger.error(
        `Error while log in user with email - ${userDto.email}`,
      );
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    try {
      this.logger.log(`Registration user with email - ${userDto.email}`);
      return this.authService.registration(userDto);
    } catch (e) {
      this.logger.error(
        `Error while reg in user with email - ${userDto.email}`,
      );
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

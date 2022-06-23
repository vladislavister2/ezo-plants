import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { UsersService } from '../users/users.service';
import { ROLES_KEY } from "./roles-auth.decorator";

@Injectable()
export class ChangePasswordGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const req = context.switchToHttp().getRequest();

      const authHeader = req.headers.authorization;
      const token = authHeader.split(' ')[1];
      const user = this.jwtService.verify(token);
      console.log(user.id);

      const q1 = await this.usersService.getById(user.id);
      console.log(q1.id);

      if (!token) {
        throw new UnauthorizedException({ message: 'User is unauthorized' });
      }
      return user;
    } catch (e) {
      console.log(e);
      throw new HttpException('Not allowed', HttpStatus.FORBIDDEN);
    }
  }

}

import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { User } from '../users/users.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class BannedUserGuard implements CanActivate {
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

      const q1 = await this.func(user.id);
      console.log(q1.isBanned);

      if (!token) {
        throw new UnauthorizedException({ message: 'User is unauthorized' });
      }
      if (q1.isBanned === true) {
        throw new UnauthorizedException({ message: 'You are banned' });
      }
      return user;
    } catch (e) {
      console.log(e);
      throw new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }
  private async func(userId: number) {
    const q1 = await this.usersService.getById(userId);
    return q1;
  }
}

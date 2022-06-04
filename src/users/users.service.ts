import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  getAll() {
    return this.users;
  }

  getById(id: string) {
    return this.users.find((p) => p.id === id);
  }

  create(productDto: CreateUserDto) {
    this.users.push({
      ...productDto,
      id: Date.now().toString(),
    });
  }

  delete(id: number) {
    for (let i = 0; i < this.users.length; i++) {
      if (Number(this.users[i].id) === Number(id)) {
        this.users.splice(i, 1);
        return 'Deleted successfully';
      }
    }
    return 'Deleted unsuccessfully';
  }

}

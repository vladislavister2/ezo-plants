import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { UpdateUserRolesDto } from './dto/update-role.dto';
import { UserRoles } from './user-roles.model';
import { User } from '../users/users.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private roleRepository: typeof Role,
    @InjectModel(UserRoles)
    private userRolesRepository: typeof UserRoles,
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }

  async getById(id: number): Promise<User> {
    return this.userRepository.findByPk(id);
  }

  async changeUserRoleById(id: number, dto: UpdateUserRolesDto) {
    const user = await this.userRepository.findByPk(id);
    // const userRoles = user.roles[];
    // const roleId = userRoles[id];
    // return roleId.update(dto);
    return 'none';
  }
}

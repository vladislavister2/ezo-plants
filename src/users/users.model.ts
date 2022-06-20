import {
  BelongsToMany,
  Column,
  DataType, HasOne,
  Model,
  Table
} from "sequelize-typescript";
import { UserRoles } from '../roles/user-roles.model';
import { Role } from '../roles/roles.model';
import { Cart } from "../cart/cart.model";

interface UserCreationAttrs {
  email: string;
  password: string;
  isBanned: boolean;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isBanned: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasOne(() => Cart)
  cart: Cart;
}

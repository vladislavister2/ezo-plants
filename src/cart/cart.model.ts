import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Product } from '../products/products.model';
import { CartProducts } from './cart-products.model';

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  userID: number;

  @BelongsToMany(() => Product, () => CartProducts)
  categories: Product[];
}

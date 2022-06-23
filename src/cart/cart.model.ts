import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table
} from "sequelize-typescript";
import { User } from '../users/users.model';
import { Product } from '../products/products.model';
import { CartProducts } from './cart-products.model';
import { Order } from '../order/order.model';

interface CartCreationAttrs {
  id: number;
  userId: number;
}

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, CartCreationAttrs> {
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
  userId: number;

  @BelongsToMany(() => Product, () => CartProducts)
  products: CartProducts[];

  @HasOne(() => Order)
  order: Order;

  @BelongsTo(() => User)
  user: User;
}

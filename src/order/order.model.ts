import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from '../cart/cart.model';

interface OrderCreationAttrs {
  id: number;
  cartId: number;
  city: string;
  telephone: number;
  firstName: string;
  lastName: string;
  isDone: boolean;
}

@Table({ tableName: 'order' })
export class Order extends Model<Order, OrderCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cartId: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  city: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  telephone: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lastName: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isDone: boolean;

  @BelongsTo(() => Cart)
  cart: Cart;
}

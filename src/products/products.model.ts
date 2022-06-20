import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from '../category/category.model';
import { CategoryProducts } from '../category/category-products.model';
import { Cart } from '../cart/cart.model';
import { CartProducts } from '../cart/cart-products.model';

interface ProductCreationAttrs {
  title: string;
  describe: string;
  isAvailable: boolean;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;


  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isAvailable: boolean;

  @BelongsToMany(() => Category, () => CategoryProducts)
  categories: Category[];

  @BelongsToMany(() => Cart, () => CartProducts)
  carts: Cart[];
}

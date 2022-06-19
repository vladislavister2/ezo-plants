import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from '../category/category.model';
import { CategoryProducts } from '../category/category-products.model';

interface ProductCreationAttrs {
  email: string;
  password: string;
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
    type: DataType.STRING,
    allowNull: true,
  })
  describe: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isAvailable: boolean;

  @BelongsToMany(() => Category, () => CategoryProducts)
  categories: Category[];
}

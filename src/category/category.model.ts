import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "../products/products.model";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { CategoryProducts } from "./category-products.model";

interface CategoryCreationAttrs {
  title: string;
}

@Table({ tableName: 'category', createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryCreationAttrs> {
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

  @BelongsToMany(() => Product, () => CategoryProducts)
  products: Product[];
}

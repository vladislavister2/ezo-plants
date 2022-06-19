import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { InfoArticlesModule } from './info-articles/info-articles.module';
import { User } from './users/users.model';
import { Product } from './products/products.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { Category } from './category/category.model';
import { CategoryModule } from './category/category.module';
import { CategoryProducts } from './category/category-products.model';
import { CartModule } from './cart/cart.module';
import { CartProducts } from './cart/cart-products.model';
import { Cart } from './cart/cart.model';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    HttpModule,
    InfoArticlesModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Product,
        Role,
        UserRoles,
        Category,
        CategoryProducts,
        CartProducts,
        Cart,
      ],
      autoLoadModels: true,
    }),
    RolesModule,
    UsersModule,
    AuthModule,
    CategoryModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

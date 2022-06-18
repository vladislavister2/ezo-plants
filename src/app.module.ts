import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { InfoArticlesModule } from './info-articles/info-articles.module';
import { typeOrmConfig } from '../typeOrm.config';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    HttpModule,
    InfoArticlesModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

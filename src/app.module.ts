import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { InfoArticlesModule } from './info-articles/info-articles.module';

@Module({
  imports: [ProductsModule, UsersModule, HttpModule, InfoArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

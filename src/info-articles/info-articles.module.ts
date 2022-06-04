import { Module } from '@nestjs/common';
import { InfoArticlesController } from './info-articles.controller';
import { InfoArticlesService } from './info-articles.service';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [InfoArticlesService],
  controllers: [InfoArticlesController],
})
export class InfoArticlesModule {

}

import { Controller, Get, Redirect } from '@nestjs/common';
import { InfoArticlesService } from './info-articles.service';

@Controller('info-articles')
export class InfoArticlesController {
  constructor(private readonly infoService: InfoArticlesService) {}

  @Get()
  @Redirect(
    'https://www.frontiersin.org/articles/10.3389/fphar.2022.801855/full',
    301,
  )
  getAll() {
    return 'getAll';
  }

  @Get(':id')
  async getInfo() {
    return this.infoService.findPoetry().pipe();
  }
}

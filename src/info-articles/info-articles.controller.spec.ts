import { Test, TestingModule } from '@nestjs/testing';
import { InfoArticlesController } from './info-articles.controller';

describe('InfoArticlesController', () => {
  let controller: InfoArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoArticlesController],
    }).compile();

    controller = module.get<InfoArticlesController>(InfoArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

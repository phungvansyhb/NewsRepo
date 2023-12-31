import { Test, TestingModule } from '@nestjs/testing';
import { NewsCategoryController } from './news-category.controller';
import { NewsCategoryService } from './news-category.service';

describe('NewsCategoryController', () => {
  let controller: NewsCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsCategoryController],
      providers: [NewsCategoryService],
    }).compile();

    controller = module.get<NewsCategoryController>(NewsCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DataMonsterController } from './data-monster.controller';

describe('DataMonsterController', () => {
  let controller: DataMonsterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataMonsterController],
    }).compile();

    controller = module.get<DataMonsterController>(DataMonsterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

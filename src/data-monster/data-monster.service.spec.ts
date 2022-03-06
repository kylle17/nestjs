import { Test, TestingModule } from '@nestjs/testing';
import { DataMonsterService } from './data-monster.service';

describe('DataMonsterService', () => {
  let service: DataMonsterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataMonsterService],
    }).compile();

    service = module.get<DataMonsterService>(DataMonsterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AbilityScoreService } from './ability-score.service';

describe('AbilityScoreService', () => {
  let service: AbilityScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbilityScoreService],
    }).compile();

    service = module.get<AbilityScoreService>(AbilityScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

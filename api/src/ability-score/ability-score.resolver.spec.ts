import { Test, TestingModule } from '@nestjs/testing';
import { AbilityScoreResolver } from './ability-score.resolver';

describe('AbilityScoreResolver', () => {
  let resolver: AbilityScoreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbilityScoreResolver],
    }).compile();

    resolver = module.get<AbilityScoreResolver>(AbilityScoreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

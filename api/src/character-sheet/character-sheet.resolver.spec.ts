import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSheetResolver } from './character-sheet.resolver';

describe('CharacterSheetResolver', () => {
  let resolver: CharacterSheetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterSheetResolver],
    }).compile();

    resolver = module.get<CharacterSheetResolver>(CharacterSheetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

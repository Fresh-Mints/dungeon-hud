import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSheetService } from './character-sheet.service';

describe('CharacterSheetService', () => {
  let service: CharacterSheetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterSheetService],
    }).compile();

    service = module.get<CharacterSheetService>(CharacterSheetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

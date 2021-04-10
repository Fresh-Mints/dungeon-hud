import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSheetService } from '../character-sheet.service';
import { closeInMongodConnection, rootMongooseTestModule } from '../../../test-utils/mongo/MongooseTestModule';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { CharacterSheet, CharacterSheetDocument, CharacterSheetSchema } from '../character-sheet.model';
import { Model } from 'mongoose';
import { mocked } from 'ts-jest';
import { MaybeMockedDeep } from 'ts-jest/dist/util/testing';

describe('CharacterSheetService', () => {
  let characterSheetService: CharacterSheetService;
  let characterSheetModel: any;

  beforeEach(async () => {


    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: CharacterSheet.name, schema: CharacterSheetSchema}])
      ],
      providers: [CharacterSheetService, {
        provide: getModelToken(CharacterSheet.name),
        useValue: {
          _id: 'abcdef',
          user: 'Matt',
          name: 'Jerry',
          abilityScores: {
            strength: 8,
            dexterity: 8,
            constitution: 8,
            intelligence: 8,
            wisdom: 8,
            charisma: 8,
          },
          description: 'descriptionTest',
        },
      }
      ],
    }).compile();

    characterSheetService = module.get<CharacterSheetService>(CharacterSheetService);
    characterSheetModel = mocked(module.get(getModelToken(CharacterSheet.name)), true);
  });

  it('should be defined', () => {
    expect(characterSheetService).toBeDefined();
  });

  describe('getById', () => {
    it('should return a characterSheet', async () => {
      characterSheetModel.findById.mockResolvedValue(' value not found');
    })
  })

  afterAll(async () => {
    await closeInMongodConnection();
  })
});

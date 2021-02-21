import { Module } from '@nestjs/common';
import { CharacterSheetResolver } from './character-sheet.resolver';
import { CharacterSheetSchema } from './character-sheet.schema';
import characterSheetSchema, { ICharacterSheet } from '../models/character-sheet.model';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterSheetService } from './character-sheet.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'CharacterSheet', schema: characterSheetSchema }])],
  providers: [CharacterSheetResolver, CharacterSheetService],
})
export class CharacterSheetModule {}

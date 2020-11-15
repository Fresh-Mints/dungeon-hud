import { Module } from '@nestjs/common';
import { CharacterSheetResolver } from './character-sheet.resolver';
import { CharacterSheetSchema } from './character-sheet.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterSheetService } from './character-sheet.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'CharacterSheet', schema: CharacterSheetSchema }])],
  providers: [CharacterSheetResolver, CharacterSheetService],
})
export class CharacterSheetModule {}

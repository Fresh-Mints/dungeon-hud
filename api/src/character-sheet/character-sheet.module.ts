import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterSheet, CharacterSheetSchema } from './character-sheet.model';
import { CharacterSheetResolver } from './character-sheet.resolver';
import { CharacterSheetService } from './character-sheet.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: CharacterSheet.name, schema: CharacterSheetSchema}])
    ],
    providers: [CharacterSheetResolver, CharacterSheetService]
})
export class CharacterSheetModule {}

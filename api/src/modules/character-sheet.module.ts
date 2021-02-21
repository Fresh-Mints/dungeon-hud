import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CharacterSheetSchema } from '../models/character-sheet.model';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'characterSheet', schema: CharacterSheetSchema}]),
    ],
})
export class CharacterSheetModule {};
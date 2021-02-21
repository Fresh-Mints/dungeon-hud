import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AbilityScoresSchema } from '../models/ability-scores.model';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'abilityScore', schema: AbilityScoresSchema}]),
    ],
})
export class AbilityScoresModule {};
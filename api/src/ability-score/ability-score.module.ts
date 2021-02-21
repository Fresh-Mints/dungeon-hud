import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbilityScores, AbilityScoreSchema } from './ability-score.model';
import { AbilityScoreResolver } from './ability-score.resolver';
import { AbilityScoreService } from './ability-score.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: AbilityScores.name, schema: AbilityScoreSchema }])
    ],
    providers: [AbilityScoreResolver, AbilityScoreService]
})
export class AbilityScoreModule {}

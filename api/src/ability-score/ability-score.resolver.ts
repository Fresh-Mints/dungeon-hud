import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { AbilityScores } from './ability-score.model';
import { AbilityScoreService } from './ability-score.service';
import {
    CreateAbilityScoreInput,
} from './dto';

@Resolver(() => AbilityScores)
export class AbilityScoreResolver {
    constructor(private abilityScoreService: AbilityScoreService) {}

    @Query(() => AbilityScores)
    async abilityScore(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
        return this.abilityScoreService.getById(_id);
    }

    @Mutation(() => AbilityScores)
    async createAbilityScores(@Args('payload') payload: CreateAbilityScoreInput) {
        return this.abilityScoreService.create(payload);
    }
}

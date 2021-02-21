import { AbilityScores } from '../../ability-score/ability-score.model';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCharacterSheetInput {
    @Field(() => String)
    name: string;

    @Field(() => [String])
    abilityScores: AbilityScores;

    @Field(() => String)
    description: string;
}
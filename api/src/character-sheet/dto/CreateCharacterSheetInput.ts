import { AbilityScores } from '../../ability-score/ability-score.model';
import { Field, InputType } from '@nestjs/graphql';
import { CreateAbilityScoreInput } from 'src/ability-score/dto';

@InputType()
export class CreateCharacterSheetInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    user: string;

    @Field(() => CreateAbilityScoreInput)
    abilityScores: AbilityScores;

    @Field(() => String)
    description: string;
}
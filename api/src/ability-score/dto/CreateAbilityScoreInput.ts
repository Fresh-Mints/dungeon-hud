import { Types } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAbilityScoreInput {
    @Field(() => Number)
    strength: number;

    @Field(() => Number)
    dexterity: number;

    @Field(() => Number)
    constitution: number;

    @Field(() => Number)
    intelligence: number;

    @Field(() => Number)
    wisdom: number;

    @Field(() => Number)
    charisma: number;
}
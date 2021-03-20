import { AbilityScores } from '../../ability-score/ability-score.model';
import { Field, ID, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class UpdateCharacterSheetInput {
    @Field(() => String)
    _id: Types.ObjectId;

    @Field(() => String, {nullable: true})
    name: string;

    @Field(() => String, {nullable: true})
    user: string;

    @Field(() => [String], {nullable: true})
    @Prop({ type: Types.ObjectId, ref: AbilityScores.name })
    abilityScores: Types.ObjectId;

    @Field(() => String, {nullable: true})
    description: string;
}
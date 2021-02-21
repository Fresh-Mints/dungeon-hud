import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose'

@ObjectType()
@Schema()
export class AbilityScores {
    @Field(() => Number)
    @Prop()
    strength: number;

    @Field(() => Number)
    @Prop()
    dexterity: number;

    @Field(() => Number)
    @Prop()
    constitution: number;

    @Field(() => Number)
    @Prop()
    intelligence: number;

    @Field(() => Number)
    @Prop()
    wisdom: number;

    @Field(() => Number)
    @Prop()
    charisma: number;
}

export type AbilityScoreDocument = AbilityScores & Document;

export const AbilityScoreSchema = SchemaFactory.createForClass(AbilityScores);
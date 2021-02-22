import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { AbilityScores } from '../ability-score/ability-score.model';

@ObjectType()
@Schema()
export class CharacterSheet {
    @Field(() => String)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    user: string;

    @Field(() => String)
    @Prop()
    name: string;

    @Field(() => [String])
    @Prop({ type: Types.ObjectId, ref: AbilityScores.name })
    abilityScores: Types.ObjectId;

    @Field(() => String)
    @Prop()
    description: string;
}

export type CharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema = SchemaFactory.createForClass(CharacterSheet);
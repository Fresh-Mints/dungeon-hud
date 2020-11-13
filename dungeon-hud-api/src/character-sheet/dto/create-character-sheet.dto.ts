import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class CharacterSheetType {
    @Field(() => ID)
    @IsString()
    readonly id?: string;
    @Field()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @Field(() => [AbilityScore])
    @IsArray()
    readonly abilityScores: [AbilityScore];
    @Field()
    @IsString()
    readonly description: string;
}

@ObjectType()
export class AbilityScore {
    @Field()
    @IsString()
    readonly name: string;
    @Field()
    @IsNumber()
    readonly number: number;
}
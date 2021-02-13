import { InputType, Field} from 'type-graphql';
import { IsNumber, IsObject, IsString } from 'class-validator';

@InputType()
export class AbilityScores {
    @Field()
    @IsNumber()
    readonly strength: number;
    @Field()
    @IsNumber()
    readonly dexterity: number;
    @Field()
    @IsNumber()
    readonly constitution: number;
    @Field()
    @IsNumber()
    readonly intelligence: number;
    @Field()
    @IsNumber()
    readonly wisdom: number;
    @Field()
    @IsNumber()
    readonly charisma: number;
}

@InputType()
export class CharacterSheetInput {
    @Field()
    @IsString()
    readonly name: string;
    @Field()
    @IsObject()
    readonly abilityScores?: AbilityScores;
    @Field()
    @IsString()
    readonly description?: string;
}
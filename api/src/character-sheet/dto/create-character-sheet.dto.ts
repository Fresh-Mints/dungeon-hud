import { ObjectType, Field, ID} from 'type-graphql';
import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@ObjectType()
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

@ObjectType()
export class CharacterSheetType {
    @Field(() => ID)
    @IsString()
    readonly id?: string;
    @Field()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @Field()
    @IsObject()
    @Type(() => AbilityScores)
    readonly abilityScores?: AbilityScores;
    @Field()
    @IsString()
    readonly description?: string;
}

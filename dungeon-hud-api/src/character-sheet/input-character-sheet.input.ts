import { InputType, Field} from 'type-graphql';

@InputType()
export class CharacterSheetInput {
    @Field()
    readonly name: string;
    @Field(() => [AbilityScore])
    readonly abilityScores: [AbilityScore];
    @Field()
    readonly description: string;
}

@InputType()
export class AbilityScore {
    @Field()
    readonly name: string;
    @Field()
    readonly number: number;
}
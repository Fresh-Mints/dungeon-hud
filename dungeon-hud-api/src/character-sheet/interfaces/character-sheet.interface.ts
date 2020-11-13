import { Document, Types } from 'mongoose';

export interface CharacterSheet extends Document { 
    readonly name: string;
    readonly abilityScores: Types.Array<AbilityScore>;
    readonly description: string;
}

export interface AbilityScore extends Document {
    readonly name: string;
    readonly number: number;
}

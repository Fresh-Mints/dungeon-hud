import { Document } from 'mongoose';

export interface AbilityScores extends Document {
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly wisdom: number;
    readonly charisma: number;
}

export interface CharacterSheet extends Document { 
    readonly name: string;
    readonly abilityScores?: {
        readonly strength: number;
        readonly dexterity: number;
        readonly constitution: number;
        readonly intelligence: number;
        readonly wisdom: number;
        readonly charisma: number;    
    };
    readonly description?: string;
}

import { makeVar } from "@apollo/client";

export type IAbilities = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';

export type IAbilityScores = {
    [score in IAbilities]: number;
};

export const emptyAbilityScores: IAbilityScores = {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
}

export interface ICharacterSheet {
    _id?: string;
    name?: string;
    abilityScores?: IAbilityScores;
    description?: string;
}

export interface ICharacterSheetState {
    characterSheets: ICharacterSheet[];
}

export const emptyCharacter: ICharacterSheet = {
    _id: '',
    name: '',
    abilityScores: emptyAbilityScores,
    description: '',
}

export const characterVar = makeVar<ICharacterSheet>(
    emptyCharacter,
);
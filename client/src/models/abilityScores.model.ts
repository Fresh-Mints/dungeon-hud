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
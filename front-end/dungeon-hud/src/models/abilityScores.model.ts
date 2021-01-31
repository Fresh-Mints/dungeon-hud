export type IAbilities = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';

export type IAbilityScores = {
    [score in IAbilities]: number;
};

export const emptyAbilityScores: IAbilityScores = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
}
import { emptyAbilityScores, IAbilityScores } from './abilityScores.model'

export interface ICharacterSheet {
    id: string;
    name: string;
    abilityScores: IAbilityScores;
    description?: string;
}

export interface ICharacterSheetState {
    characterSheets: ICharacterSheet[];
}

export const emptyCharacter = {
    id: '',
    name: '',
    abilityScores: emptyAbilityScores,
    description: '',
}
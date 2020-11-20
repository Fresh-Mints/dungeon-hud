import { ICharacterSheet } from "../../models/characterSheet.model";

export const ADD_CHARACTER_SHEET = 'ADD_CHARACTER_SHEET';
export const REMOVE_CHARACTER_SHEET = 'REMOVE_CHARACTER_SHEET';

export interface IAddCharacterSheetAction {
    type: typeof ADD_CHARACTER_SHEET,
    characterSheet: ICharacterSheet,
}

export interface IRemoveCharacterSheetAction {
    type: typeof REMOVE_CHARACTER_SHEET,
    id: string, 
}

export type ICharacterSheetActionTypes = IAddCharacterSheetAction | IRemoveCharacterSheetAction;
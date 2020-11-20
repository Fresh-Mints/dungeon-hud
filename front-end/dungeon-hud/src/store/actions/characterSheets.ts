import { ICharacterSheet } from '../../models/characterSheet.model';
import * as actionTypes from './actionTypes';

export const addCharacterSheet = (characterSheet: ICharacterSheet) => {
    return {
        type: actionTypes.ADD_CHARACTER_SHEET,
        characterSheet: characterSheet,
    };
}

export const removeCharacterSheet = (id: string) => {
    return {
        type: actionTypes.REMOVE_CHARACTER_SHEET,
        id: id,
    };
}
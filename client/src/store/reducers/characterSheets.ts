import { ICharacterSheetState } from '../../models/characterSheet.model';
import * as actionTypes from '../actions/actionTypes';

const initialState:  ICharacterSheetState = {
    characterSheets: [],
};

const addCharacterSheet = ( state: ICharacterSheetState, action: actionTypes.IAddCharacterSheetAction ) => {
    return {
        characterSheets: [...state.characterSheets, action.characterSheet]
    };
};

const removeCharacterSheet = ( state: ICharacterSheetState, action: actionTypes.IRemoveCharacterSheetAction ) => {
    const characterSheetsCopy = [...state.characterSheets];
    const deleteIndex = characterSheetsCopy.findIndex(character => character.id === action.id)
    characterSheetsCopy.splice(deleteIndex, 1);
    return {
        characterSheets: characterSheetsCopy
    };
};

const reducer = ( state = initialState, action: actionTypes.ICharacterSheetActionTypes ) => {
    switch ( action.type ) {
        case actionTypes.ADD_CHARACTER_SHEET: return addCharacterSheet(state, action);
        case actionTypes.REMOVE_CHARACTER_SHEET: return removeCharacterSheet(state, action);
        default: return state;
    }
};

export default reducer;
import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import CharacterSheetView from '../CharacterSheetView';
import QueryResult from '../../../QueryResult/QueryResult';
import { 
    characterVar,
    findOneSheetById,
    createCharacterSheet,
    updateCharacterSheet,
} from '../../../../store/CharacterSheet';
import {
    userVar
} from '../../../../store/User';

export const CharacterSheet = () => {
    const characterSheetQuery: { loading: any, error?: any, data?: findOneSheetById.Data} = useQuery(
        findOneSheetById.FIND_ONE_SHEET_BY_ID,
        {variables: {
            _id: characterVar()._id
        } as findOneSheetById.Variables}
    )
    const [createSheet] = useMutation(createCharacterSheet.CREATE_CHARACTERSHEET);
    const [updateSheet] = useMutation(updateCharacterSheet.UPDATE_CHARACTERSHEET);

    return (
        <QueryResult
            loading={characterSheetQuery.loading}
            error={characterSheetQuery.error}
            data={characterSheetQuery.data}
        >   
            <CharacterSheetView
                characterId = {characterVar()._id}
                character = {characterSheetQuery.data}  
                username = {userVar().name}
                createCharacterSheet={createSheet}
                updateCharacterSheet={updateSheet}
            />      
        </QueryResult>
    )
}
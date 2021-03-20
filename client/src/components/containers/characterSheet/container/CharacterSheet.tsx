import React, { useState } from 'react';
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import CharacterSheetView from '../CharacterSheetView';
import { characterVar, getCharacterSheet, createCharacterSheet, updateCharacterSheet } from '../../../../store/CharacterSheet';
import QueryResult from '../../../QueryResult/QueryResult';

export const CharacterSheet = () => {
    const [username, UpdateUserName] = useState('');
    const characterSheetQuery: { loading: any, error?: any, data?: getCharacterSheet.Data} = useQuery(
        getCharacterSheet.GET_CHARACTERSHEETS,
        {variables: {
            user: username
        }}
    )
    const [createSheet, { data }] = useMutation(createCharacterSheet.CREATE_CHARACTERSHEET);
    const [updateSheet] = useMutation(updateCharacterSheet.UPDATE_CHARACTERSHEET);

    return (
        <QueryResult
            loading={characterSheetQuery.loading}
            error={characterSheetQuery.error}
            data={characterSheetQuery.data}
        >   
            <CharacterSheetView
                character = {characterSheetQuery.data}
                username = {username}
                createCharacterSheet={createSheet}
                updateCharacterSheet={updateSheet}
            />      
        </QueryResult>
    )
}
import React, { useState } from 'react';
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import CharacterSheetView from '../CharacterSheetView';
import { characterVar, getCharacterSheet, createCharacterSheet } from '../../../../store/CharacterSheet';
import QueryResult from '../../../QueryResult/QueryResult';

export const CharacterSheet = () => {
    const characterSheet = useReactiveVar(characterVar);
    const [username, UpdateUserName] = useState('');
    const characterSheetQuery: { loading: any, error?: any, data?: getCharacterSheet.Data} = useQuery(
        getCharacterSheet.GET_CHARACTERSHEETS,
        {variables: {
            user: username
        }}
    )
    const [createSheet, { data }] = useMutation(createCharacterSheet.CREATE_CHARACTERSHEET);

    return (
        <QueryResult
            loading={characterSheetQuery.loading}
            error={characterSheetQuery.error}
            data={characterSheetQuery.data}
        >
            <CharacterSheetView
                character = {characterSheet}
                username = {username}
                createCharacterSheet={createSheet}
            />
        </QueryResult>
    )
}
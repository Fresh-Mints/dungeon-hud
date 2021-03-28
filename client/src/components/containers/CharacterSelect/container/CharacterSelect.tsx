import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { characterVar, findManySheetsByUser } from '../../../../store/CharacterSheet';
import QueryResult from '../../../QueryResult/QueryResult';
import { userVar } from '../../../../store/User';
import CharacterSelectView from '../CharacterSelectView';

export const CharacterSelect = () => {
    const sheetsByUserQuery: { loading: any, error?: any, data?: findManySheetsByUser.Data} = useQuery(
        findManySheetsByUser.FIND_MANY_SHEETS_BY_USER,
        {variables: {
            user: userVar().name
        } as findManySheetsByUser.Variables}
    )

    const selectSheet = (_id?: string) => {
        if (_id) {
            let prevVar = characterVar()
            prevVar['_id'] = _id
            characterVar(prevVar)    
        }
    }

    return (
        <QueryResult
            loading={sheetsByUserQuery.loading}
            error={sheetsByUserQuery.error}
            data={sheetsByUserQuery.data}
        >
            <CharacterSelectView
                sheets = {sheetsByUserQuery.data}
                onSelect = {selectSheet}
            />
        </QueryResult>
    )
}
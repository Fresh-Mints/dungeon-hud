import React from 'react';
import CharacterSheetView from '../CharacterSheetView';
import QueryResult from '../../../QueryResult/QueryResult';
import { characterVar } from '../../../../store/characterSheet/model';
import { useCreateSheet } from '../hooks/useCreateSheet';
import { useUpdateSheet } from '../hooks/useUpdateSheet';
import { useFindSheetById } from '../hooks/useFindSheetById';
import { userVar } from '../../../../store/User/model';

export const CharacterSheet = () => {
    const { loading, error, data } = useFindSheetById()
    const { createSheet } = useCreateSheet();
    const { updateSheet } = useUpdateSheet();

    return (
        <QueryResult
            loading={loading}
            error={error}
            data={data}
        >   
            <CharacterSheetView
                characterId = {characterVar()._id}
                character = {data}  
                username = {userVar().firstName}
                createCharacterSheet={createSheet}
                updateCharacterSheet={updateSheet}
            />      
        </QueryResult>
    )
}
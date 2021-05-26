import React, { useContext } from 'react';
import CharacterSheetView from '../CharacterSheetView';
import QueryResult from '../../../QueryResult/QueryResult';
import { useCreateSheet } from '../hooks/useCreateSheet';
import { useUpdateSheet } from '../hooks/useUpdateSheet';
import { useFindSheetById } from '../hooks/useFindSheetById';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../../store/User/UserContext';

export const CharacterSheet = () => {
    const id = useParams<string>();
    const { loading, error, data } = useFindSheetById(id);
    const { createSheet } = useCreateSheet();
    const { updateSheet } = useUpdateSheet();
    const user = useContext(UserContext)?.user;

    return (
        <QueryResult
            loading={loading}
            error={error}
            data={data}
        >   
            <CharacterSheetView
                characterId = {id}
                character = {data}  
                username = {user?._id ?? ''}
                createCharacterSheet={createSheet}
                updateCharacterSheet={updateSheet}
            />      
        </QueryResult>
    )
}
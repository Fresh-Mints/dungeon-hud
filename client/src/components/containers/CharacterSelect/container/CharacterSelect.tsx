import React from 'react';
import { characterVar } from '../../../../store/characterSheet/model';
import QueryResult from '../../../QueryResult/QueryResult';
import CharacterSelectView from '../CharacterSelectView';
import { useFindManySheetsByUser } from '../hooks/useFindManySheetsByUser';

export const CharacterSelect = () => {
    const { loading, error, data } = useFindManySheetsByUser()
    const selectSheet = (_id?: string) => {
        if (_id) {
            let prevVar = characterVar()
            prevVar['_id'] = _id
            characterVar(prevVar)    
        }
    }

    return (
        <QueryResult
            loading={loading}
            error={error}
            data={data}
        >
            <CharacterSelectView
                sheets = {data}
                onSelect = {selectSheet}
            />
        </QueryResult>
    )
}
import React from 'react';
// import { characterVar } from '../../../../store/characterSheet/model';
import QueryResult from '../../../QueryResult/QueryResult';
import CharacterSelectView from '../CharacterSelectView';
import { useFindManySheetsByUser } from '../hooks/useFindManySheetsByUser';

export const CharacterSelect = () => {
    const { loading, error, sheets } = useFindManySheetsByUser()

    // const selectSheet = (_id: string) => {
    //     // let prevVar = characterVar()
    //     // prevVar['_id'] = _id
    //     // characterVar(prevVar)
    // }

    return (
        <QueryResult
            loading={loading}
            error={error}
            data={sheets}
        >
            <CharacterSelectView
                sheets = {sheets}
                // onSelect = {selectSheet}
            />
        </QueryResult>
    )
}
import React, { useContext } from 'react';
import CharacterSheetView from '../CharacterSheetView';
import { useCreateSheet } from '../hooks/useCreateSheet';
import { useUpdateSheet } from '../hooks/useUpdateSheet';
import { UserContext } from '../../../../store/User/UserContext';

export const CreateCharacterSheet = () => {
    const { createSheet } = useCreateSheet();
    const { updateSheet } = useUpdateSheet();
    const user = useContext(UserContext)?.user;

    return (
        <CharacterSheetView
            username = {user?._id ?? ''}
            createCharacterSheet={createSheet}
            updateCharacterSheet={updateSheet}
        />      
    )
}
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const user = {
    id: "1234"
};

const url = '0.0.0.0:4000/graphql';

export interface ICharacterSheet {
    id: string;
    name: string;
    abilityScores: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;    
    };
    description?: string;
}

interface ICharacterSheetResp {
    characterSheet : {
        id: string;
        name: string;
        abilityScores: {
            strength: number;
            dexterity: number;
            constitution: number;
            intelligence: number;
            wisdom: number;
            charisma: number;        
        };
        description?: string;
    },
}

const initialState: ICharacterSheet = {
    id: '',
    name: '',
    abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,    
    },
    description: '',
}

const getSheetsByUserId = createAsyncThunk(
    'characterSheets/getByUserId',
    async () => {
        const response = await axios({
            url: url,
            method: 'POST',
            data: {
                query: `
                {
                    characterSheets(
                        userId: "${user.id}"
                    ) {
                        id
                        name
                        abilityScores
                        description
                    }
                }`,
            },
        });

        return response.data
    },
);

export const characterSheetSlice = createSlice({
    name: 'characterSheet',
    initialState: initialState as ICharacterSheet,
    reducers: {
        clearCharacterSheet() {
            return initialState;
        },
    },
    extraReducers: builder => {
        builder.addCase(getSheetsByUserId.fulfilled, (state, action: PayloadAction<ICharacterSheetResp>) => {
            state.id = action.payload.characterSheet.id;
            state.name = action.payload.characterSheet.name;
            state.abilityScores = action.payload.characterSheet.abilityScores;
            state.description = action.payload.characterSheet.description;
        });
    },
});

export const {
    clearCharacterSheet
} = characterSheetSlice.actions;

export default characterSheetSlice.reducer;
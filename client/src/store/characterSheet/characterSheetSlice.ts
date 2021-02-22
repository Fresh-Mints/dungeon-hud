import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { print } from 'graphql';
import gql from 'graphql-tag';

const url = 'http://127.0.0.1:4000/graphql';
export interface ICharacterSheet {
    id: string;
    user: string;
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

export const emptyCharacter: ICharacterSheet = {
    id: '',
    user: '',
    name: '',
    abilityScores: {
        strength: 8,
        dexterity: 8,
        constitution: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8,    
    },
    description: '',
}
export interface ICharacterSheetState {
    characterSheets: ICharacterSheet[];
}

const initialState: ICharacterSheetState = {
    characterSheets: [] as Array<ICharacterSheet>
}

const createCharacterSheetQuery = gql`
mutation createCharacterSheet(
    $createCharacterSheetInput: CreateCharacterSheetInput!
) {
    createCharacterSheet(
        createCharacterSheetInput: $createCharacterSheetInput
    ) {
        _id
        user
        name
        abilityScores
        description    
    }
}`

export const createCharacterSheet = createAsyncThunk(
    'character-sheet/createCharacterSheet',
    async (payload: ICharacterSheet) => {
        const response = await axios({
            url: url,
            method: 'POST',
            data: {
                query: print(createCharacterSheetQuery),
                variables: {
                    createCharacterSheetInput: {
                        name: payload.name,
                        user: "matt",
                        abilityScores: ["test"],
                        description: payload.description,    
                    }
                },
/*                 mutation: `
                { createCharacterSheet(
                        payload: {
                            name: "${payload.name}"
                            user: "matt"
                            abilityScores: ["test"]
                            description: "${payload.description}"    
                        }
                    ) {
                        _id
                        user
                        name
                        abilityScores
                        description
                    }
                }`,
 */            },
        });

        return response.data;
    },
);

const getSheetsById = createAsyncThunk(
    'characterSheets/getById',
    async (id) => {
        const response = await axios({
            url: url,
            method: 'POST',
            data: {
                query: `
                {
                    characterSheets(
                        _id: "${id}"
                    ) {[
                        characterSheet {
                            id
                            user
                            name
                            abilityScores
                            description    
                        }
                    ]}
                }`,
            },
        });

        return response.data
    },
);

const getSheetsByUserId = createAsyncThunk(
    'characterSheets/getManyByUser',
    async (user) => {
        const response = await axios({
            url: url,
            method: 'POST',
            data: {
                query: `
                {
                    characterSheets(
                        user: "${user}"
                    ) {[
                        characterSheet {
                            id
                            user
                            name
                            abilityScores
                            description    
                        }
                    ]}
                }`,
            },
        });

        return response.data
    },
);

export const characterSheetSlice = createSlice({
    name: 'characterSheet',
    initialState: initialState as ICharacterSheetState,
    reducers: {
        clearCharacterSheet() {
            return initialState;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getSheetsById.fulfilled, (state: ICharacterSheetState, action: PayloadAction<ICharacterSheetState>) => {
                const newCharacterSheet = action.payload.characterSheets;
                return {...state, ...newCharacterSheet};
            })
            .addCase(getSheetsByUserId.fulfilled, (state: ICharacterSheetState, action: PayloadAction<ICharacterSheetState>) => {
                const newCharacterSheet = action.payload.characterSheets;
                return {...state, ...newCharacterSheet};
            })
            .addCase(createCharacterSheet.fulfilled, (state: ICharacterSheetState, action: PayloadAction<ICharacterSheet>) => {
                const newCharacterSheet = action.payload;
                return {...state, newCharacterSheet};
            })
    },
});

export const {
    clearCharacterSheet,
} = characterSheetSlice.actions;

export default characterSheetSlice.reducer;
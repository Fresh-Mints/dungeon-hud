import { gql, useMutation } from '@apollo/client';
import { IAbilityScores } from '../../../../store/characterSheet/model';

export const CREATE_CHARACTERSHEET = gql`
    mutation createCharacterSheet(
        $createCharacterSheetInput: CreateCharacterSheetInput!
    ) {
        createCharacterSheet(
            createCharacterSheetInput: $createCharacterSheetInput
        ) {
            name
            description
            abilityScores
        }
    }
`;

// input
export interface Variables {
    createCharacterSheetInput: {
        name: string;
        description: string;
        abilityScores: IAbilityScores;
        user: string;
    }
}

// output
export interface Data {
    name: string;
    description: string;
    abilityScores: string;
}

export const useCreateSheet = () => {
    const [createSheet] = useMutation<Data, Variables>(CREATE_CHARACTERSHEET);

    return { createSheet }
}
import { gql } from '@apollo/client'
import { ICharacterSheet, IAbilityScores } from './model';

// Schema
export const GET_CHARACTERSHEETS = gql`
    query findCharacterSheetsByUser(
        $user: String!
    ) {
        findCharacterSheetsByUser(
            user: $user
        ) {
            name
            description
            abilityScores
        }
    }
`;

// input
export interface Variables {
    user: string;
}

// output
export interface Data {
    _id: string;
    name: string;
    description: string;
    abilityScores: IAbilityScores;
}
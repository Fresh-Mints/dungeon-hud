import { gql } from '@apollo/client'
import { ICharacterSheet, IAbilityScores } from './model';

// Schema
export const GET_CHARACTERSHEETS = gql`
    query GetCharacterSheets(
        $user: String!
    ) {
        getCharacterSheets(
            user: $user
        ) {
            _id
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
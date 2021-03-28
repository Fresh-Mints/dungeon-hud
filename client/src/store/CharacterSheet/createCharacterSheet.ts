import { gql } from '@apollo/client';
import { IAbilityScores } from './model';
import { QueryResult as IQueryResult } from '@apollo/client';

export const CREATE_CHARACTERSHEET = gql`
    mutation createCharacterSheet(
        $name: String,
        $description: String,
        $abilityScores: AbilityScores,
        $user: String
    ) {
        createCharacterSheet(
            name: $name
            description: $description
            abilityScores: $abilityScores
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
    name: string;
    description: string;
    abilityScores: IAbilityScores;
    user: string;
}

// output
export interface Data {
    name: string;
    description: string;
    abilityScores: string;
}
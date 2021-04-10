import { gql } from '@apollo/client';
import { IAbilityScores } from './model';
import { QueryResult as IQueryResult } from '@apollo/client';

export const UPDATE_CHARACTERSHEET = gql`
    mutation updateCharacterSheet(
        $name: String,
        $description: String,
        $abilityScores: AbilityScores,
        $user: String
    ) {
       updateCharacterSheet(
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
    _id: string;
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
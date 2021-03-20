import { gql } from '@apollo/client';
import { IAbilityScores } from './model';
import { QueryResult as IQueryResult } from '@apollo/client';

export const UPDATE_CHARACTERSHEET = gql`
    mutate updateCharacterSheet(
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
    name: string;
    description: string;
    abilityScore: IAbilityScores;
    user: string;
}

// output
export interface Data {
    name: string;
    description: string;
    abilityScores: string;
}
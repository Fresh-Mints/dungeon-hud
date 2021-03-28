import { gql } from '@apollo/client'
import { IAbilityScores } from './model';

// Schema
export const FIND_MANY_SHEETS_BY_USER = gql`
    query findManySheetsByUser(
        $user: String!
    ) {
        findManySheetsByUser(
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
export interface Data extends Array<{
    _id: string;
    name: string;
    description: string;
    abilityScores: IAbilityScores;
}> { }
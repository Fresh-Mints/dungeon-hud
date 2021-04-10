import { gql } from '@apollo/client'
import { IAbilityScores } from './model';

// Schema
export const FIND_ONE_SHEET_BY_ID = gql`
    query findOneSheetById(
        $_id: String!
    ) {
        findOneSheetById(
            _id: $_id
        ) {
            name
            class
            level
            hp {
                current
                max
            }
            armorClass
            initiative
            walkingSpeed
            abilityScores
            description
        }
    }
`;

// input
export interface Variables {
    _id: string;
}

// output
export interface Data {
    name: string;
    class: string;
    level: number;
    hp: {
        current: number;
        max: number;
    };
    armorClass: number;
    initiative: number;
    walkingSpeed: number;
    abilityScores: IAbilityScores
    description: string;
}
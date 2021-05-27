import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client'
import { useContext } from 'react';
import { IAbilityScores } from '../../../../store/characterSheet/model';
import { userVar } from '../../../../store/User/model';
import { UserContext } from '../../../../store/User/UserContext';

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
            abilityScores {
                strength
                dexterity
                constitution
                wisdom
                intelligence
                charisma
            }
        }
    }
`;

// input
export interface Variables {
    user: string;
}

// output
export interface CharacterSheet {
    _id: string;
    name: string;
    description: string;
    abilityScores: IAbilityScores;
}

interface FindManySheetsByUserData {
    findManySheetsByUser: CharacterSheet[];
}

export const useFindManySheetsByUser = () => {
    const user = useContext(UserContext)?.user;

    const { loading, error, data } = useQuery<FindManySheetsByUserData, Variables>(
        FIND_MANY_SHEETS_BY_USER,
        {variables: {
            user: user?._id
        } as Variables}
    )
    const sheets = data?.findManySheetsByUser;

    return { loading, error, sheets };
}


import { gql, useMutation } from '@apollo/client';
import { IAbilityScores } from '../../../../store/characterSheet/model';

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

export const useUpdateSheet = () => {
    const [updateSheet] = useMutation(UPDATE_CHARACTERSHEET);

    return { updateSheet }
}
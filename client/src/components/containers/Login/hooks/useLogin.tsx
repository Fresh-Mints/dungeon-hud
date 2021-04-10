import { gql } from '@apollo/client'
import { useLazyQuery } from '@apollo/client';

// Schema
export const LOGIN = gql`
    query login(
        $email: String!
    ) {
        login(
            email: $email
        ) {
            _id
            name
            email
        }
    }
`;

// input
export interface Variables {
    email: string;
}

// output
export interface Data {
    _id: string;
    name: string;
    email: string;
}

export const useLogin = () => {
    const [loginUser, { error, loading, data }] = useLazyQuery(LOGIN);
    return { loginUser, error, loading, data }
}
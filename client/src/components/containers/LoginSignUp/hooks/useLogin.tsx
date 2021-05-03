import { gql } from '@apollo/client'
import { useLazyQuery } from '@apollo/client';

// Schema
export const LOGIN = gql`
    query login(
        $email: String!
        $password: String!
    ) {
        login(
            email: $email
            password: $password
        ) {
            _id
            firstName
            lastName
            email
        }
    }
`;

// input
export interface Variables {
    email: string;
    password: string;
}

// output
export interface Data {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
}

export interface LoginInput {
    variables: Variables
}

export const useLogin = () => {
    const [loginUser, { error, loading, data }] = useLazyQuery(LOGIN);
    return { loginUser, error, loading, data }
}
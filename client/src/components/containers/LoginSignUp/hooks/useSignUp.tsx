import { gql } from '@apollo/client'
import { useLazyQuery } from '@apollo/client';

// Schema
export const SIGN_UP = gql`
    query signUp(
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
    ) {
        signUp(
            email: $email
            password: $password
            firstName: $firstName
            lastName: $lastName
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
    firstName: string;
    lastName: string;
}

// output
export interface Data {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface SignUpInput {
    variables: Variables
}

export const useSignUp = () => {
    const [signUpUser, { error, loading, data }] = useLazyQuery(SIGN_UP);
    return { signUpUser, error, loading, data }
}
import { gql } from '@apollo/client'

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
import { gql } from '@apollo/client'
import { useLazyQuery } from '@apollo/client';
import { useContext } from 'react';
import { UserContext } from '../../../../store/User/UserContext';

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

export interface Input {
    variables: Variables
}

export const useLogin = () => {
    const userContext = useContext(UserContext)
    
    const [login, { error, loading, data }] = useLazyQuery<Data, Variables>(LOGIN, {
            onCompleted(data) {
                console.log(data)
                if (data) {
                    console.log(userContext?.user)
                    if (userContext?.setUser) {
                        userContext.setUser({
                            _id: data._id,
                            lastName: data.lastName,
                            firstName: data.firstName,
                            email: data.email,
                            token: data.token,
                        })
                    }
                    localStorage.setItem('token', data.token)
                }
            },
            onError(error) {
                console.log(`[Query Error] error: ${error}`)
            },
        });

    return { login, error, loading, data }
}
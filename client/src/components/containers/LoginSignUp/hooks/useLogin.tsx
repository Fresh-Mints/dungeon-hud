import { gql } from '@apollo/client'
import { useLazyQuery } from '@apollo/client';
import { useContext, useEffect } from 'react';
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
            token
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
    login: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        token: string;
    }   
}

export interface Input {
    variables: Variables
}

export const useLogin = () => {
    const userContext = useContext(UserContext)
    const [login, { loading, data }] = useLazyQuery<Data, Variables>(LOGIN, {
        onCompleted: (data) => {
            console.log(data);
            if (data && userContext?.setUser) {
                userContext.setUser({
                    _id: data.login._id,
                    lastName: data.login.lastName,
                    firstName: data.login.firstName,
                    email: data.login.email,
                    token: data.login.token,
                })
                localStorage.setItem('authToken', data.login.token)
            }
        }
    });

    // useEffect(() => {
    //     if (error) {
    //         console.log(error.message);
    //     }
    // }, [error])

    // useEffect(() => {
    //     console.log(data);
    //     if (data && !userContext?.user._id) {
    //         if (userContext?.setUser) {
    //             userContext.setUser({
    //                 _id: data.login._id,
    //                 lastName: data.login.lastName,
    //                 firstName: data.login.firstName,
    //                 email: data.login.email,
    //                 token: data.login.token,
    //             })
    //         }
    //         localStorage.setItem('token', data.login.token)
    //     }
    // }, [data, userContext])

    return { login, loading, data }
}
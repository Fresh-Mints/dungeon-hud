import { gql, useMutation } from '@apollo/client'
import { onError } from '@apollo/client/link/error';

// Schema
export const SIGN_UP = gql`
    mutation signUp(
        $CreateUserInput: CreateUserInput!
    ) {
        signUp(
            CreateUserInput: $CreateUserInput
        ) {
            _id
            firstName
            lastName
            email
            token
        }
    }
`;
export interface Input {
    CreateUserInput: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;        
    }
}

export interface Data {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;    
}

export const useSignUp = () => {
    const [signUpUser, { error, loading, data }] = useMutation<
        Data,
        Input
        >(SIGN_UP,
        {
            onCompleted(data) {
                if (data) {
                    localStorage.setItem('token', data.token)
                }
            },
            onError(error) {
                console.log(`[Mutation Error] error: ${error}`)
            }
        }
    );
    return { signUpUser, error, loading, data }
}
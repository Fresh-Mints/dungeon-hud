import React, { useContext } from 'react';
import QueryResult from '../../../QueryResult/QueryResult';
import LoginView from '../LoginView';
import SignUpView from '../SignUpView';
import { useLogin } from '../hooks/useLogin';
import { useSignUp } from '../hooks/useSignUp';
import { UserContext } from '../../../../store/User/UserContext';

export const LoginSignUp = () => {
    const { login } = useLogin();
    const { signUpUser, error, loading } = useSignUp();
    const userContext = useContext(UserContext)
    console.log(userContext?.user.email);

    return (
        // <QueryResult
        //     loading={loading}
        //     error={error}
        //     data={data}
        // >
        // </QueryResult>
        <>
            <LoginView
                login={login}
            />
            <SignUpView
                signUp={signUpUser}
            />
            <QueryResult 
                error={error} 
                loading={loading}
            >

            </QueryResult>
        </>
            
    )
}
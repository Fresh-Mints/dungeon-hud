import React from 'react';
import QueryResult from '../../../QueryResult/QueryResult';
import LoginView from '../LoginView';
import SignUpView from '../SignUpView';
import { useLogin } from '../hooks/useLogin';
import { useSignUp } from '../hooks/useSignUp';

export const LoginSignUp = () => {
    const { loginUser } = useLogin();
    const { signUpUser } = useSignUp();

    return (
        // <QueryResult
        //     loading={loading}
        //     error={error}
        //     data={data}
        // >
        // </QueryResult>
        <>
            <LoginView
                login={loginUser}
            />
            <SignUpView
                signUp={signUpUser}
            />
        </>
            
    )
}
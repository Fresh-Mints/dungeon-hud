import React, { useContext, useEffect } from 'react';
import QueryResult from '../../../QueryResult/QueryResult';
import LoginView from '../LoginView';
import SignUpView from '../SignUpView';
import { useLogin } from '../hooks/useLogin';
import { useSignUp } from '../hooks/useSignUp';
import { UserContext } from '../../../../store/User/UserContext';
import { useHistory } from 'react-router';

export const LoginSignUp = () => {
    const { login, data } = useLogin();
    const { signUpUser, error, loading } = useSignUp();
    const userContext = useContext(UserContext)
    const history = useHistory();
    useEffect(() => {
        if (data) {
            history.push('/characterSheet');
        }
    }, [data])

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
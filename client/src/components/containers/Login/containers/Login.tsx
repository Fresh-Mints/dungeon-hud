import React from 'react';
import QueryResult from '../../../QueryResult/QueryResult';
import LoginView from '../LoginView';
import { useLogin } from '../hooks/useLogin';

export const CharacterSelect = () => {
    const { loginUser, loading, error, data } = useLogin();

    return (
        <QueryResult
            loading={loading}
            error={error}
            data={data}
        >
            <LoginView
                login={loginUser}
            />
        </QueryResult>
    )
}
import React, { useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import QueryResult from '../../../QueryResult/QueryResult';
import LoginView from '../LoginView';
import {
    userVar,
    login,
} from '../../../../store/User';

export const CharacterSelect = () => {
    const [loginUser, { error, loading, data }] = useLazyQuery(login.LOGIN);

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
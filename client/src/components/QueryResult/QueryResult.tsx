import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { ApolloError } from '@apollo/client';

interface IProps {
    loading: boolean;
    error?: ApolloError;
    data?: any;
    children: any;
}

const QueryResult = ({ loading, error, data, children }: IProps ) => {
    if (error) { return <p>ERROR: {error.message}</p>};

    if (loading) {
        return (
            <CircularProgress/>
        )
    }
    if (!data) {
        return <p>Nobody here but us chickens...</p>
    }
    if (data) {
        return children;
    }
}

export default QueryResult;
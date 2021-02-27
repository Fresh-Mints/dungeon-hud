import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { QueryResult } from '@apollo/client';

interface IProps extends QueryResult {
    children: any
}

const QueryRes = ({loading, error, data, children}: IProps ) => {
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

export default QueryRes;
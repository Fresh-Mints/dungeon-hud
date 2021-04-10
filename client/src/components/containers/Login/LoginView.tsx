import { TextField } from '@material-ui/core';
import React, { FormEvent, useState } from 'react';
import { login } from '../../../store/User';

interface LoginInput {
    variables: login.Variables
}

interface IProps {
    login: (loginInput: LoginInput) => void;
}

const LoginView = (props: IProps) => {
    const [email, setEmail] = useState('');

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        props.login({
            variables: {
                email: email,
            },
        });
    };
    
    return (
        <form onSubmit={submitHandler}>
            <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />  
        </form>
        
    )
}

export default LoginView;
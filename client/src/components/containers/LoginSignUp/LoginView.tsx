import { Button, TextField } from '@material-ui/core';
import React, { FormEvent, useState } from 'react';
import { login } from './hooks';

interface IProps {
    login: (loginInput: login.Input) => void;
}

const LoginView = (props: IProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        props.login({
            variables: {
                email: email,
                password: password,
            },
        });
    };
    
    return (
        <form onSubmit={submitHandler}>
            <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                label='Email'
            />
            <TextField
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                label='Password'
                type='password'
            />
            <Button onClick={submitHandler} variant='outlined' color='primary'>
                Login
            </Button>  
        </form>
        
    )
}

export default LoginView;
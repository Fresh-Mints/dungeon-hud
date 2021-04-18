import { Button, TextField } from '@material-ui/core';
import React, { FormEvent, useState } from 'react';
import { signUp } from './hooks';

interface IProps {
    signUp: (loginInput: signUp.SignUpInput) => void;
}

const SignUpView = (props: IProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        props.signUp({
            variables: {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            },
        });
    };
    
    return (
        <form onSubmit={submitHandler}>
            <TextField
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                label='First Name'
            />
            <TextField
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                label='Last Name'
            />
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
                SignUp
            </Button>  
        </form>
        
    )
}

export default SignUpView;
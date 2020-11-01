import { Button, List, ListItemText, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import './CharacterSheet.css';

interface Props {

}

const CharacterSheet = (props: Props) => {
    const [name, setName] = useState('');
    const [names, setNames] = useState<string[]>([]);
    
    const nameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const clickButtonHandler = () => {
        const namesCopy = [...names];
        namesCopy.push(name);
        setNames(namesCopy);
        setName('');
    }

    const clickNameHandler = (index: number) => {
        const namesCopy = [...names];
        namesCopy.splice(index, 1);
        setNames(namesCopy);
    }

    const nameList = names.map((n, index) => (
        <ListItemText primary={n} onClick={() => clickNameHandler(index)}/>
    ));

    return (
        <div>
            <TextField
                id='standard-basic'
                label='Character Name'
                onChange={nameChangedHandler}
                value={name}
            />
            <Button variant='contained' color='primary' onClick={clickButtonHandler}>Accept</Button>
            <List>
                {nameList}
            </List>
        </div>
    );
};

export default CharacterSheet;
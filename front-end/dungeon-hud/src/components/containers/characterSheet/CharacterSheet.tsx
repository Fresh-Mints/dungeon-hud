import { Button, List, ListItemText, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CharacterSheet.css';
import { addCharacterSheet, removeCharacterSheet } from '../../../store/actions/characterSheets';
import { ICharacterSheet } from '../../../models/characterSheet.model';
import { IRootState } from '../../../models/rootState';

const CharacterSheet = () => {
    const [name, setName] = useState('');

    const characterSheets = useSelector((state: IRootState) => state.characterSheetState.characterSheets);
    const dispatch = useDispatch();

    const nameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const clickButtonHandler = () => {
        let id = '0';
        if (characterSheets.length > 0) {
            id = characterSheets[characterSheets.length-1].id + 1;
        }
        const characterSheet: ICharacterSheet = {
            name: name,
            id: id,
            abilityScores: {
                strength: 2,
                dexterity: 3,
                constitution: 5,
                charisma: 12,
                intelligence: 18,
                wisdom: 20,
            }
        };
        dispatch(addCharacterSheet(characterSheet));
        setName('');
    }

    const clickNameHandler = (id: string) => {
        dispatch(removeCharacterSheet(id));
    }

    const characterList = characterSheets.map((c, index) => (
        <ListItemText primary={c.name} onClick={() => clickNameHandler(c.id)}/>
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
                {characterList}
            </List>
        </div>
    );
};

export default CharacterSheet;
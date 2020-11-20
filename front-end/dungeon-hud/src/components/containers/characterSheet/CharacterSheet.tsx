import { Button, List, ListItemText, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './CharacterSheet.css';
import { addCharacterSheet, removeCharacterSheet } from '../../../store/actions/characterSheets';
import { ICharacterSheet, ICharacterSheetState } from '../../../models/characterSheet.model';
import * as actionTypes from '../../../store/actions/actionTypes';
import { IRootState } from '../../../models/rootState';

// interface IProps {
//     characterSheetState: ICharacterSheetState;
//     addCharacterSheet: (characterSheet :ICharacterSheet) => void;
//     removeCharacterSheet: (id :string) => void;
// }

const CharacterSheet = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState<string[]>([]);

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

// const mapStateToProps = (state: ICharacterSheetState) => {
//     return {
//         characterSheets: state.characterSheets,
//     }
// }

// const mapDispatchToProps = {addCharacterSheet, removeCharacterSheet}

export default CharacterSheet;
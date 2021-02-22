import { Button, FormControl, InputLabel, List, ListItemText, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CharacterSheet.module.scss';
import { createCharacterSheet, clearCharacterSheet, ICharacterSheet, emptyCharacter } from '../../../store/characterSheet/characterSheetSlice';
import { IRootState } from '../../../models/rootState';
import { IAbilities } from '../../../models/abilityScores.model';

const useStyles = makeStyles({
    root: {
        marginBottom: '1rem',
    },
    scores: {
        margin: '1rem',
    },
});

const CharacterSheet = () => {
    const [newCharacter, setNewCharacter] = useState(emptyCharacter);

    const classes = useStyles();

    const characterSheets = useSelector((state: IRootState) => state.characterSheetState.characterSheets);
    const dispatch = useDispatch();
    const thunkDispatch = () => dispatch(createCharacterSheet(newCharacter));

    const nameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCharacter({...newCharacter, name: e.target.value});
    }

    const descriptionChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCharacter({...newCharacter, description: e.target.value});
    }

    const scoreChangedHandler = (value: number, ability: IAbilities) => {
        const abilityScoresCopy = {...newCharacter.abilityScores};
        abilityScoresCopy[ability] = value;
        setNewCharacter({...newCharacter, abilityScores: abilityScoresCopy});
    }

    const clickButtonHandler = () => {
        if (!newCharacter.name) {
            return;
        }
        let id = '0';
        if (characterSheets.length > 0) {
            id = characterSheets[characterSheets.length-1].id + 1;
        }
        dispatch(createCharacterSheet({...newCharacter}));
        setNewCharacter(emptyCharacter);
    }

    const clickNameHandler = (id: string) => {
        dispatch(clearCharacterSheet);
    }

    const characterList = characterSheets.map((c, index) => (
        <div key={index}>
            <ListItemText primary={c.name} onClick={() => clickNameHandler(c.id)} />
            <ListItemText primary={c.description} />
            <ListItemText primary={'Strength - ' + c.abilityScores.strength} />
            <ListItemText primary={'Dexterity - ' + c.abilityScores.dexterity} />
            <ListItemText primary={'Constitution - ' + c.abilityScores.constitution} />
            <ListItemText primary={'Intelligence - ' + c.abilityScores.intelligence} />
            <ListItemText primary={'Wisdom - ' + c.abilityScores.wisdom} />
            <ListItemText primary={'Charisma - ' + c.abilityScores.charisma} />
        </div>
    ));

    const scoreValues: JSX.Element[] = [];
    for (let i = 0; i <= 20; i++) {
        scoreValues.push(<MenuItem value={i}>{i}</MenuItem>);
    }

    return (
        <div className={styles.characterSheet}>
            <TextField
                id='standard-basic'
                onChange={nameChangedHandler}
                value={newCharacter.name}
                helperText='Character Name'
                autoComplete='off'
                className={classes.root}
            />
            <TextField
                id='standard-basic'
                helperText='Description'
                onChange={descriptionChangedHandler}
                autoComplete='off'
                value={newCharacter.description}
                multiline
                className={classes.root}
            />
            <div className={styles.scores}>
                <FormControl className={classes.root}>
                    <InputLabel id='demo-simple-select-label'>Strength</InputLabel>
                    <Select
                        className={classes.scores}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={newCharacter.abilityScores.strength}
                        name='strength'
                        onChange={(event) => scoreChangedHandler(event.target.value as number, 'strength')}
                    >
                    {scoreValues}
                    </Select>
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel id='demo-simple-select-label'>Dexterity</InputLabel>
                    <Select
                        className={classes.scores}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={newCharacter.abilityScores.dexterity}
                        name='dexterity'
                        onChange={(event) => scoreChangedHandler(event.target.value as number, 'dexterity')}
                    >
                    {scoreValues}
                    </Select>
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel id='demo-simple-select-label'>Constitution</InputLabel>
                    <Select
                        className={classes.scores}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={newCharacter.abilityScores.constitution}
                        name='constitution'
                        onChange={(event) => scoreChangedHandler(event.target.value as number, 'constitution')}
                    >
                    {scoreValues}
                    </Select>
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel id='demo-simple-select-label'>Intelligence</InputLabel>
                    <Select
                        className={classes.scores}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={newCharacter.abilityScores.intelligence}
                        name='intelligence'
                        onChange={(event) => scoreChangedHandler(event.target.value as number, 'intelligence')}
                    >
                    {scoreValues}
                    </Select>
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel id='demo-simple-select-label'>Wisdom</InputLabel>
                    <Select
                        className={classes.scores}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={newCharacter.abilityScores.wisdom}
                        name='wisdom'
                        onChange={(event) => scoreChangedHandler(event.target.value as number, 'wisdom')}
                    >
                    {scoreValues}
                    </Select>
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel id='demo-simple-select-label'>Charisma</InputLabel>
                    <Select
                        className={classes.scores}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={newCharacter.abilityScores.charisma}
                        name='charisma'
                        onChange={(event) => scoreChangedHandler(event.target.value as number, 'charisma')}
                    >
                    {scoreValues}
                    </Select>
                </FormControl>
            </div>
            <Button variant='contained' color='primary' onClick={clickButtonHandler}>Accept</Button>
            <List>
                {characterList}
            </List>
        </div>
    );
};

export default CharacterSheet;
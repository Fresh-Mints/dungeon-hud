import { FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './CharacterSheet.module.scss';
import { CharacterSheetModel, updateCharacterSheet } from '../../../store/CharacterSheet';
import { emptyCharacter } from '../../../store/CharacterSheet/model';

const useStyles = makeStyles({
    root: {
        marginBottom: '1rem',
    },
    scores: {
        margin: '1rem',
    },
});

interface UpdateInput {
    variables: updateCharacterSheet.Variables
}

interface IProps {
    characterId?: string
    character?: CharacterSheetModel.ICharacterSheet
    username: string
    createCharacterSheet: () => void
    updateCharacterSheet: (updateInput: UpdateInput) => void
}

const CharacterSheetView = (props: IProps) => {
    const classes = useStyles();
    let initCharacter = emptyCharacter;
    if (props.character) {
        initCharacter = {...props.character, _id: props.characterId};
    }
    const [ character, setCharacter ] = useState(initCharacter);

    // const character = props.character; 
    // const characterScores = (
    //     <List>
    //         <ListItemText primary={character.name} />
    //         <ListItemText primary={character.description} />
    //         <ListItemText primary={'Strength - ' + character.abilityScores.strength} />
    //         <ListItemText primary={'Dexterity - ' + character.abilityScores.dexterity} />
    //         <ListItemText primary={'Constitution - ' + character.abilityScores.constitution} />
    //         <ListItemText primary={'Intelligence - ' + character.abilityScores.intelligence} />
    //         <ListItemText primary={'Wisdom - ' + character.abilityScores.wisdom} />
    //         <ListItemText primary={'Charisma - ' + character.abilityScores.charisma} />
    //     </List>
    // );

    const scoreValues: JSX.Element[] = [];
    for (let i = 0; i <= 20; i++) {
        scoreValues.push(<MenuItem value={i}>{i}</MenuItem>);
    }

    const changeHandler = (value: string, field: string) => {
        switch (field) {
            case 'name': {
                setCharacter({...character, name: value})
                break;
            }
            case 'description': {
                setCharacter({...character, description: value})
                break;
            }
            case 'strength': {
                setCharacter({...character, abilityScores: {...character.abilityScores, strength: +value}});
                break;
            }
            case 'dexterity': {
                setCharacter({...character, abilityScores: {...character.abilityScores, dexterity: +value}});
                break;
            }
            case 'constitution': {
                setCharacter({...character, abilityScores: {...character.abilityScores, constitution: +value}});
                break;
            }
            case 'intelligence': {
                setCharacter({...character, abilityScores: {...character.abilityScores, intelligence: +value}});
                break;
            }
            case 'wisdom': {
                setCharacter({...character, abilityScores: {...character.abilityScores, wisdom: +value}});
                break;
            }
            case 'charisma': {
                setCharacter({...character, abilityScores: {...character.abilityScores, charisma: +value}});
                break;
            }
            default: {
                break;
            }
        }
        if (props.character) {
            props.updateCharacterSheet(
                {
                    variables: 
                    {
                        _id: character._id,
                        name: character.name,
                        abilityScores: character.abilityScores,
                        description: character.description,
                        user: props.username,
                    } as updateCharacterSheet.Variables
                }
            );
        }
    }

    return (
        <div className={styles.characterSheet}>
            <TextField
                id='standard-basic'
                onChange={(event) => changeHandler(event.target.value as string, 'name')}
                value={character.name}
                helperText='Character Name'
                autoComplete='off'
                className={classes.root}
            />
            <TextField
                id='standard-basic'
                helperText='Description'
                onChange={(event) => changeHandler(event.target.value as string, 'description')}
                autoComplete='off'
                value={character.description}
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
                        value={character.abilityScores.strength}
                        name='strength'
                        onChange={(event) => changeHandler(event.target.value as string, 'strength')}
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
                        value={character.abilityScores.dexterity}
                        name='dexterity'
                        onChange={(event) => changeHandler(event.target.value as string, 'dexterity')}
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
                        value={character.abilityScores.constitution}
                        name='constitution'
                        onChange={(event) => changeHandler(event.target.value as string, 'constitution')}
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
                        value={character.abilityScores.intelligence}
                        name='intelligence'
                        onChange={(event) => changeHandler(event.target.value as string, 'intelligence')}
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
                        value={character.abilityScores.wisdom}
                        name='wisdom'
                        onChange={(event) => changeHandler(event.target.value as string, 'wisdom')}
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
                        value={character.abilityScores.charisma}
                        name='charisma'
                        onChange={(event) => changeHandler(event.target.value as string, 'charisma')}
                    >
                    {scoreValues}
                    </Select>
                </FormControl>
            </div>
            {/* <Button variant='contained' color='primary' onClick={submitHandler}>Accept</Button> */}
            {/* {characterScores} */}
        </div>
    );
};

export default CharacterSheetView;
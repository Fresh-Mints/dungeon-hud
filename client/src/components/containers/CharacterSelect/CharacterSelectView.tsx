import React from 'react';
import { Link } from 'react-router-dom';
import { ICharacterSheet } from '../../../store/characterSheet/model';
import styles from './CharacterSelect.module.scss';

interface IProps {
    sheets?: ICharacterSheet[]
    // onSelect: (_id: string) => void;
}

const CharacterSelectView = (props: IProps) => {
    let sheets: JSX.Element[] = [];

    if (props.sheets) {
        sheets = props.sheets.map(sheet => (
                <Link
                    className={styles.SheetPreview}
                    // onClick={() => props.onSelect(sheet._id!)}
                    key={sheet._id}
                    to={'characterSheet/' + sheet._id}
                >
                    <span>{sheet.name}</span>
                    <span>{sheet.description}</span>
                </Link>
            )
        )
    }
    
    return (
        <div className={styles.Container}>
            <Link
                className={styles.createNew}
                // onClick={() => props.onSelect('')}
                to={'characterSheet/create'}
                >
                <span>Create New Character!</span>
            </Link>
            {sheets}
        </div>   
    )
}

export default CharacterSelectView;
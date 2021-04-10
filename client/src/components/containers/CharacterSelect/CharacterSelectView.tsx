import React from 'react';
import { ICharacterSheet } from '../../../store/CharacterSheet/model';
import styles from './CharacterSelect.module.scss';

interface IProps {
    sheets?: ICharacterSheet[]
    onSelect: (_id: string) => void;
}

const CharacterSelectView = (props: IProps) => {
    let sheets = ([
        <div className={styles.createNew}
            onClick={() => props.onSelect('')}
        >
            <span>Create New Character!</span>
        </div>
    ]);

    if (props.sheets) {
        props.sheets.map(
            sheet => (
                sheets.push(
                    <div className={styles.SheetPreview}
                        onClick={() => props.onSelect(sheet._id!)}
                    >
                        <span>{sheet.name}</span>
                        <span>{sheet.description}</span>
                    </div>
                )
            )
        )
    }
    
    return (
        <div className={styles.Container}>
            {sheets}
        </div>   
    )
}

export default CharacterSelectView;
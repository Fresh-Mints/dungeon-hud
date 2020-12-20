import styles from './Navigation.module.css';
import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { NavigationItem } from './NavigationItem/NavigationItem';

interface Navigation {
    isAuthenticated: boolean;
};

export const Navigation = () => {
    return (
        <ul className={styles.Navigation}>
            <NavigationItem route="CharacterSheet">
                Character Sheet
            </NavigationItem>
            <NavigationItem route="Examples">
                Examples
            </NavigationItem>
        </ul>
    );
}
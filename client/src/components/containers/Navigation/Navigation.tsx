import styles from './Navigation.module.css';
import React from 'react';
import { NavigationItem } from './NavigationItem/NavigationItem';

interface Navigation {
    isAuthenticated: boolean;
};

export const Navigation = () => {
    return (
        <ul className={styles.Navigation}>
            <NavigationItem route="login">
                Login/Sign Up Here
            </NavigationItem>
            <NavigationItem route="characterSheet">
                Character Sheet
            </NavigationItem>
            <NavigationItem route="Examples">
                Examples
            </NavigationItem>
        </ul>
    );
}
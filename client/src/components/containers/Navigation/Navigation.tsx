import styles from './Navigation.module.css';
import React, { useContext } from 'react';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { UserContext } from '../../../store/User/UserContext';
import { emptyUser } from '../../../store/User/model';

export const Navigation = () => {
    const user = useContext(UserContext);
    const logout = () => {
        user?.setUser(emptyUser);
        localStorage.setItem('authToken', '');
    };
    let userNav = ( 
        <NavigationItem route="/login">
            Login/Sign Up Here
        </NavigationItem>
    );
    if (user?.user._id) {
        userNav = (
            <NavigationItem route="/" onClick={logout}>
                Logout
            </NavigationItem>
        );
    }
    return (
        <ul className={styles.Navigation}>
            {userNav}
            <NavigationItem route="/characterSheet">
                Character Sheet
            </NavigationItem>
            <NavigationItem route="/Examples">
                Examples
            </NavigationItem>
        </ul>
    );
}
import styles from './NavigationItem.module.css';
import React, {FunctionComponent} from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationItem {
    route: string;
}

export const NavigationItem: FunctionComponent<NavigationItem> = ({route, children}) => (
    <li className={styles.NavigationItem}>
        <NavLink
            to={route}
            exact
        >
            {children}
        </NavLink>
    </li>
);
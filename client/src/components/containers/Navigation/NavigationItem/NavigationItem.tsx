import styles from './NavigationItem.module.css';
import React, {FunctionComponent} from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationItem {
    route: string;
    onClick?: () => void;
}

export const NavigationItem: FunctionComponent<NavigationItem> = ({route, onClick, children}) => (
    <li className={styles.NavigationItem}>
        <NavLink
            to={route}
            exact
            onClick={onClick}
        >
            {children}
        </NavLink>
    </li>
);
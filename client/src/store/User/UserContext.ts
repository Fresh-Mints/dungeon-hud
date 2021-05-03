import React, { createContext } from 'react';
import { IUser } from './model';

export interface IUserContext {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const UserContext = createContext<IUserContext | null>(null);
import { makeVar } from "@apollo/client";

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const emptyUser = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
}

export const userVar = makeVar<IUser>(
    emptyUser,
);
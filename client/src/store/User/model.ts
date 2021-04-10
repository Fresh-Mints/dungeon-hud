import { makeVar } from "@apollo/client";

export interface IUser {
    _id: string;
    name: string;
    email: string;
}

export const emptyUser = {
    _id: '',
    name: '',
    email: '',
}

export const userVar = makeVar<IUser>(
    emptyUser,
);
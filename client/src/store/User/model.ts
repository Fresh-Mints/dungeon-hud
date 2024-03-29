import { makeVar } from "@apollo/client";

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    token :string;
}

export const emptyUser = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    token: '',
}

export const userVar = makeVar<IUser>(
    emptyUser,
);
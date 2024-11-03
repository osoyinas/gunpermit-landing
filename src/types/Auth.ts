/* eslint-disable no-unused-vars */
export interface AuthTokens {
    access: string;
}

export interface UserRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    repeat_password: string;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface EditableUser {
    first_name: string;
    last_name: string;
}

export enum Providers {
    GOOGLE = 'google',
    EMAIL = 'email',
}

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

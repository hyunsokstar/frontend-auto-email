export interface SignUpDto {
    email: string,
    password: string
}

export interface LoginUserDto {
    email: string;
    password: string;
}

export interface apiForloginResponse {
    access_token: string;
    loginUser: {
        email: string;
        id: number;
    }
}
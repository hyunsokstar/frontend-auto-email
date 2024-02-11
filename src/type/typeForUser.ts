export interface SignUpDto {
    email: string,
    password: string
}

export interface LoginUserDto {
    email: string;
    password: string;
}

export interface ResponseTypeForLogin {
    access_token: string;
    loginUser: {
        email: string;
        id: number;
    }
}

export interface ResponseTypeForLoginCheck {
    isLoggendIn: boolean;
    loginUser: {
        email: string;
        id: number;
    }
}
import axios, { AxiosResponse } from "axios";
import { API_SERVER_URL } from "./CommonApi";
import { LoginUserDto, SignUpDto, ResponseTypeForLogin, ResponseTypeForLoginCheck } from "@/type/typeForUser";
// import { QueryFunctionContext } from "@tanstack/react-query";

const instance = axios.create({
    baseURL: `${API_SERVER_URL}/auth`,
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        // console.log("access token 유무 확인 : ", accessToken);

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// 1122
export const apiForLoginCheck = async ():
    Promise<AxiosResponse<ResponseTypeForLoginCheck>> => {

    try {
        const response = await instance.get('loginCheck');
        console.log("response for loginCheck : ", response);

        return response; // 
    } catch (error) {
        throw error; // 에러 처리 로직을 추가할 수 있습니다.
    }
};

export const apiForLogin = async ({ email, password }: LoginUserDto):
    Promise<AxiosResponse<ResponseTypeForLogin>> => {

    const loginUserDto = {
        email,
        password
    }

    try {
        const response = await instance.post('login', loginUserDto);

        console.log("response : ", response);

        return response; // access_token을 반환합니다.
    } catch (error) {
        throw error; // 에러 처리 로직을 추가할 수 있습니다.
    }
};

export const apiForSingUp =
    async ({ email, password }: SignUpDto): Promise<AxiosResponse> => {
        console.log("email : ", email);
        console.log("password : ", email);

        const userDtoForSignUp = {
            email,
            password
        }

        console.log("userDtoForSignUp : ", userDtoForSignUp);


        try {
            const response = await instance.post(
                `signup`, userDtoForSignUp
            );
            return response;
        } catch (error) {
            throw error;
        }
    };

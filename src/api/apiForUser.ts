import axios, { AxiosResponse } from "axios";
import { API_SERVER_URL } from "./CommonApi";
import { LoginUserDto, SignUpDto } from "@/type/typeForUser";
// import { QueryFunctionContext } from "@tanstack/react-query";

const instance = axios.create({
    baseURL: `${API_SERVER_URL}/auth`,
    withCredentials: true,
});

// 1122

export const apiForLogin = async ({ email, password }: LoginUserDto): Promise<AxiosResponse<{ access_token: string }>> => {

    const loginUserDto = {
        email,
        password
    }

    try {
        const response = await instance.post('login', loginUserDto);
        return response.data; // access_token을 반환합니다.
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
            // 에러 처리 로직을 추가할 수 있습니다.
            throw error;
        }
    };

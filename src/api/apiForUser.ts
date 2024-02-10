import axios, { AxiosResponse } from "axios";
import { API_SERVER_URL } from "./CommonApi";
import { SignUpDto } from "@/type/typeForUser";
// import { QueryFunctionContext } from "@tanstack/react-query";

const instance = axios.create({
    baseURL: `${API_SERVER_URL}/auth`,
    withCredentials: true,
});

// 1122
export const apiForSingUp =
    async ({ email, password }: SignUpDto): Promise<AxiosResponse> => {
        console.log("email : ", email);
        console.log("password : ", email);

        try {
            const response = await instance.post(
                `/signup`, { email, password }
            );
            return response;
        } catch (error) {
            // 에러 처리 로직을 추가할 수 있습니다.
            throw error;
        }
    };

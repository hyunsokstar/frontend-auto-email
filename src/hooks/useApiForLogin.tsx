import { useMutation } from 'react-query';
import { useToast } from '@chakra-ui/react';
import useStore from '@/store/index';
import { AxiosResponse } from 'axios';
import { apiForLogin } from '@/api/apiForUser';

interface ResponseTypeForLogin {
    access_token: string;
    loginUser: {
        email: string;
        id: number;
    }
}

const useApiForLogIn = () => {
    const toast = useToast();
    const setUser = useStore(state => state.setUser);
    const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

    const mutationForLogin = useMutation({
        // mutationFn: ({ email, password }: LoginUserDto) => apiForLogin({ email, password }),
        mutationFn: apiForLogin,
        onSuccess: (result: AxiosResponse<ResponseTypeForLogin>) => {
            console.log("result : ", result);

            setUser({
                id: result.data.loginUser.id,
                email: result.data.loginUser.email,
            });

            // result.data.access_token 을 localstorage 의 access_token 에 저장
            // localstorage 의 access_token 에 저장 key accessToken
            if (result.data.access_token) {
                localStorage.setItem('accessToken', result.data.access_token);
            } else {
                toast({
                    title: "로그인 실패",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                });
                return;
            }

            setIsLoggedIn(true);

            toast({
                title: "로그인 성공",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        },
        onError: (error: any) => {
            console.error("로그인 오류: ", error);

            toast({
                title: "로그인 오류",
                description: error.response?.data?.message || '오류가 발생했습니다.',
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        },
    });

    return mutationForLogin;
};

export default useApiForLogIn;

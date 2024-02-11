import { useMutation } from 'react-query';
import { useToast } from '@chakra-ui/react';
import useStore from '@/store/index';
import { AxiosResponse } from 'axios';
import { apiForLoginCheck } from '@/api/apiForUser';
import { ResponseTypeForLoginCheck } from '@/type/typeForUser';


const useApiForLogInCheck = () => {
    const toast = useToast();
    const setUser = useStore(state => state.setUser);
    const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

    const mutationForLoginCheck = useMutation({
        mutationFn: apiForLoginCheck,
        onSuccess: (result: AxiosResponse<ResponseTypeForLoginCheck>) => {
            console.log("result : ", result);

            setIsLoggedIn(true);

            setUser({
                id: result.data.loginUser.id,
                email: result.data.loginUser.email,
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

    return mutationForLoginCheck;
};

export default useApiForLogInCheck;

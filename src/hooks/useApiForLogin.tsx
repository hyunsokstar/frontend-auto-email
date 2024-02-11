import { useMutation } from 'react-query';
import { apiForLogin } from '@/api/apiForUser';
import { useToast } from '@chakra-ui/react';

const useApiForLogIn = () => {
    const toast = useToast();

    const mutationForLogin = useMutation(apiForLogin, {
        onSuccess: (result) => {
            console.log("result : ", result);

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

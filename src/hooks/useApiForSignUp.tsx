import { SignUpDto } from '@/type/typeForUser';
import { apiForSingUp } from '@/api/apiForUser';
import { useMutation } from 'react-query';
import { useToast } from '@chakra-ui/react';

const useApiForSignUp = () => {
    const toast = useToast();

    const signUpMutation = useMutation({
        mutationFn: (data: SignUpDto) => apiForSingUp(data),
        onSuccess: () => {
            toast({
                title: "Sign up successful",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        },
        onError: (error: any) => {
            console.error("Error signing up: ", error);

            toast({
                title: "Error signing up",
                description: error.response.data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        },
    });

    return signUpMutation;
};

export default useApiForSignUp;

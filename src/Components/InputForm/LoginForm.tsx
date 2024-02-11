import React from 'react';
import { Box, Flex, Input, Button, useColorModeValue } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import useApiForLogIn from '@/hooks/useApiForLogin';

interface LoginFormProps { }

interface LoginFormInputs {
    email: string;
    password: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const inputBg = useColorModeValue('white', 'gray.200');
    const inputColor = useColorModeValue('gray.800', 'black');

    const inputPlaceholderStyle: CSSProperties = {
        color: useColorModeValue('gray.400', 'gray.600'),
    };

    const { register, handleSubmit } = useForm<LoginFormInputs>();
    const mutationForLogin = useApiForLogIn();

    const onSubmit = (data: LoginFormInputs) => {
        mutationForLogin.mutate(data); // 이메일과 패스워드 전송
    };

    return (
        <Flex as="form" onSubmit={handleSubmit(onSubmit)} align="center" gap={2}>
            <Box>
                <Input
                    {...register('email')}
                    type="email"
                    placeholder="ID"
                    size="sm"
                    bg={inputBg}
                    color={inputColor}
                    _placeholder={inputPlaceholderStyle}
                />
            </Box>
            <Box>
                <Input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                    size="sm"
                    bg={inputBg}
                    color={inputColor}
                    _placeholder={inputPlaceholderStyle}
                />
            </Box>
            <Button type="submit" colorScheme="teal" size="sm" px="3">
                로그인
            </Button>
        </Flex>
    );
};

export default LoginForm;

import React, { useEffect } from 'react';
import { Box, Flex, Input, Button, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import SignUpModal from './Modal/SignUpModal';
import LoginForm from './InputForm/LoginForm';
import useStore from '@/store';
import useApiForLogInCheck from '@/hooks/useApiForLoginCheck';


const HeaderMenus: React.FC = () => {
    const { toggleColorMode } = useColorMode();
    const bg = useColorModeValue('teal.300', 'teal.700');
    const color = useColorModeValue('white', 'gray.100');

    // mutation 
    const mutationForLoginCheck = useApiForLogInCheck();

    // Zustand 스토어
    const isLoggedIn = useStore(state => state.isLoggedIn);
    const loginUser = useStore(state => state.loginUser);

    useEffect(() => {
        if (!isLoggedIn) {
            mutationForLoginCheck.mutate()
        }
    }, [isLoggedIn])


    return (
        <Box bg={bg} color={color}>
            <Flex align="center" justify="space-between" p={4}>
                <Box>
                    <Link href="/">
                        Auto-Email
                    </Link>
                </Box>
                <Box>
                    <Flex>
                        <Box mr={4}>
                            <Link href={''}>Users</Link>
                        </Box>
                        <Box>
                            <Link href={''}>공지 사항</Link>
                        </Box>
                    </Flex>
                </Box>
                <Flex align="center" gap={2}>

                    {isLoggedIn ? (
                        <Box>
                            {loginUser.email} 님 안녕하세요
                        </Box>
                    ) : (
                        <LoginForm />
                    )}

                    <SignUpModal />

                    <IconButton
                        aria-label="Toggle dark mode"
                        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                        onClick={toggleColorMode}
                        size="sm"
                        px="3"
                        bg="transparent"
                        border="1px"
                        borderColor="teal.400"
                        _hover={{ bg: 'teal.400', color: 'white' }}
                        _active={{ bg: 'teal.600' }}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default HeaderMenus;

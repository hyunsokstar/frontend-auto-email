import React from 'react';
import { Box, Flex, Input, Button, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { CSSProperties } from 'react';
import SignUpModal from './Modal/SignUpModal';
import LoginForm from './InputForm/LoginForm';

const HeaderMenus: React.FC = () => {
    const { toggleColorMode } = useColorMode();
    const bg = useColorModeValue('teal.300', 'teal.700');
    const color = useColorModeValue('white', 'gray.100');
    const inputBg = useColorModeValue('white', 'gray.200');
    const inputColor = useColorModeValue('gray.800', 'black');

    const inputPlaceholderStyle: CSSProperties = {
        color: useColorModeValue('gray.400', 'gray.600'),
    };

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

                    {/* <Box>
                        <Input placeholder="ID" size="sm" bg={inputBg} color={inputColor} _placeholder={inputPlaceholderStyle} />
                    </Box>
                    <Box>
                        <Input type="password" placeholder="Password" variant="filled" size="sm" bg={inputBg} color={inputColor} _placeholder={inputPlaceholderStyle} />
                    </Box>
                    <Button colorScheme="teal" size="sm" px="3">로그인</Button> */}

                    <LoginForm onLogin={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                    <SignUpModal />

                    {/* IconButton에 스타일을 추가하여 토글 모드 아이콘을 노란색으로 변경하고 버튼에 윤곽을 추가합니다. */}
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

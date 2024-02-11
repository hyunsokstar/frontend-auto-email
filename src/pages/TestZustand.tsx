// pages/index.tsx
import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import useStore from '@/store';

const TestZustand: React.FC = () => {
    const { count, increment, decrement } = useStore();

    return (
        <Box textAlign="center" mt={10}>
            <Heading as="h1" size="xl" mb={4}>Count: {count}</Heading>
            <Button colorScheme="teal" onClick={increment} mr={2}>Increment</Button>
            <Button colorScheme="red" onClick={decrement}>Decrement</Button>
        </Box>
    );
};

export default TestZustand;

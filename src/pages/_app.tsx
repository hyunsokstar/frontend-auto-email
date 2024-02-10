import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import HeaderMenus from "@/Components/HeaderMenus";
import { QueryClient, QueryClientProvider } from 'react-query';


export default function App({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <HeaderMenus />
                    <Component {...pageProps} />
                </ChakraProvider>
            </QueryClientProvider>
        </>
    );
}

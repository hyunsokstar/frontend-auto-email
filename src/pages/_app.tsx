import React from "react";
import { Box, ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import HeaderMenus from "@/Components/HeaderMenus";
// import theme from "../../theme";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider>
                <HeaderMenus />
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

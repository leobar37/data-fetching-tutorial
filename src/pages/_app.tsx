import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import { Styles } from "@chakra-ui/theme-tools";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={extendTheme({
        styles: {
          global: {
            body: {
              overflowX : "hidden"
            },
          },
        } as Styles,
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

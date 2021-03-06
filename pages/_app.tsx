import "../styles/globals.css";
import "../styles/prism.css";
import "../styles/prismoverrides.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  ChakraProvider,
  Container,
  DarkMode,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";
import { extendTheme } from "@chakra-ui/react";
import CreateSnippetButton from "../components/features";
import HomeButton from "../components/features/HomeButton";
import LoginButton from "../components/features/LoginButton";

const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#1b1924",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  function onStarClick() {
    router.push("/");
  }

  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
        <QueryClientProvider client={queryClient}>
          <Flex justifyContent="center" alignItems="center">
            <Flex
              w="1200px"
              maxW="1200"
              mt="10"
              flexFlow="column"
              alignItems="center"
              justifyContent="center"
            >
              <Flex w="1000px" flexFlow="column" justifyContent="center">
                <Flex w="100%" justifyContent="center">
                  <Component {...pageProps} />
                  <Flex flexFlow="column">
                    <LoginButton />
                    <Flex>
                      <HomeButton />
                      <CreateSnippetButton />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </DarkMode>
    </ChakraProvider>
  );
}
export default MyApp;

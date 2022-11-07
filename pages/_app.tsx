import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
// import { ReactQueryDevtools } from "react-query/devtools";
//hydrate our components with data that are already pre-fetched from the server
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

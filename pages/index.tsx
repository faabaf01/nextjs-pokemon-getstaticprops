//Next js server side rendering
import { Box, Heading } from "@chakra-ui/react";
import request from "graphql-request";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PokemonCards from "../components/PokemonCards";
import ShowError from "../components/ShowError";
import { GET_ALL_POKEMONS } from "../graphql/AllPokemons";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("pokemons", fetchPokemons);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

async function fetchPokemons() {
  const endpoint = "https://graphql-pokeapi.graphcdn.app/";
  const data = await request(endpoint, GET_ALL_POKEMONS, {
    limit: 14,
    offset: 0,
  });
  return data;
}

export default function Home() {
  //this query will fetch from the cache
  const { data, isError } = useQuery("pokemons", fetchPokemons);

  return (
    <Box w="100%" h="100%" bgGradient="linear(green.100 25%, orange.100 50%)">
      <Head>
        <title>Pokemon List</title>
      </Head>
      <Header />
      <Heading
        fontSize={{ base: "13px", sm: "15px", md: "20px", lg: "25px" }}
        p={10}
        fontFamily={"mono"}
        textAlign="center"
      >
        Welcome to the Home Page! Choose a Pokemon:
      </Heading>

      <>{isError && <ShowError />}</>
      {data && <PokemonCards pokemons={data} />}
      <Footer />
    </Box>
  );
}

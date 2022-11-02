//Next js server side rendering
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import request from "graphql-request";
import Head from "next/head";
import Link from "next/link";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PokemonCards from "../components/PokemonCards";
import ShowError from "../components/ShowError";
import ShowLoading from "../components/ShowLoading";
import { GET_ALL_POKEMONS } from "../graphql/AllPokemons";

interface IPokemons {
  pokemons: {
    count: number;
    results: [
      {
        name: string;
        image: string;
      }
    ];
  };
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("pokemons", fetchPokemons);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const endpoint = "https://graphql-pokeapi.graphcdn.app/";

async function fetchPokemons() {
  const data = await request(endpoint, GET_ALL_POKEMONS, {
    limit: 10,
    offset: 0,
  });
  return data;
}

export default function Home() {
  //this query will fetch from the cache
  const { data, isLoading, isError } = useQuery("pokemons", fetchPokemons);
  // console.log(data);
  return (
    <Box w="100%" h="100%" bgGradient="linear(blue.100 25%, purple.100 50%)">
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
      {isLoading ? <ShowLoading /> : <PokemonCards pokemons={data} />}
      <Footer />
    </Box>
  );
}

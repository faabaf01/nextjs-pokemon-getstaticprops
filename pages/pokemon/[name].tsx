import React from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import request from "graphql-request";
import { GET_DETAIL_POKEMON } from "../../graphql/SpecificPokemon";
import PokemonTypes from "../../components/PokemonTypes";
import ShowError from "../../components/ShowError";
import { Box, Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import Link from "next/link";
import Head from "next/head";
import PokemonProfile from "../../components/PokemonProfile";
import PokemonMoves from "../../components/PokemonMoves";
import Footer from "../../components/Footer";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context: any) => {
  const name = context.params?.name as string;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["pokemon", name], () => fetchPokemon(name));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
//fallback blocking: ui is blocked until the new page is received in the browser
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

async function fetchPokemon(name: string | string[] | undefined) {
  const endpoint = "https://graphql-pokeapi.graphcdn.app/";
  const data = await request(endpoint, GET_DETAIL_POKEMON, { name });
  return data;
}

function Details() {
  const router = useRouter();
  const { name } = router.query;

  const { data, isError } = useQuery(["pokemon", name], () =>
    fetchPokemon(name)
  );

  return (
    <>
      <Box w="100%" h="100%" bgGradient="linear(green.100 25%, orange.100 50%)">
        <Head>
          <title>{data?.pokemon.name}</title>
        </Head>
        <Header />
        <Link href="/">
          <Button colorScheme={"gray"}>Back to Home</Button>
        </Link>

        <>{isError && <ShowError />}</>
        {data && (
          <>
            <PokemonProfile props={data.pokemon} />
            <PokemonTypes pokeTypes={data.pokemon.types} />
            <PokemonMoves pokeMoves={data.pokemon.moves} />
          </>
        )}
      </Box>
      <Footer />
    </>
  );
}

export default Details;
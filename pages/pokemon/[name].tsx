import React from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import request from "graphql-request";
import { GET_DETAIL_POKEMON } from "../../graphql/SpecificPokemon";
import PokemonTypes from "../../components/PokemonTypes";
import ShowLoading from "../../components/ShowLoading";
import ShowError from "../../components/ShowError";
import { Box, Button, Stack } from "@chakra-ui/react";
import Header from "../../components/Header";
import Link from "next/link";
import Head from "next/head";
import PokemonProfile from "../../components/PokemonProfile";
import PokemonMoves from "../../components/PokemonMoves";

interface Props {}

export async function getServerSideProps(context: any) {
  const name = context.params.name as string;
  // const name = params.name;

  // async function fetchPokemon() {
  //   const data = await request(endpoint, GET_DETAIL_POKEMON, { name });
  //   return data;
  // }

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["pokemon", name], () => fetchPokemon(name));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const endpoint = "https://graphql-pokeapi.graphcdn.app/";
// const gqlVariables = { name };

async function fetchPokemon(name: string | string[] | undefined) {
  const data = await request(endpoint, GET_DETAIL_POKEMON, { name });
  return data;
}

function Details() {
  const router = useRouter();
  const { name } = router.query;

  const { data, isLoading, isError, isFetching } = useQuery(
    ["pokemon", name],
    () => fetchPokemon(name)
  );
  // console.log(isLoading);

  // async function fetchPokemon() {
  //   const data = await request(endpoint, GET_DETAIL_POKEMON, { name });
  //   return data;
  // }

  return (
    <>
      {/* <p>{JSON.stringify(data)}</p> */}
      <Box w="100%" h="100%" bgGradient="linear(blue.100 25%, purple.100 50%)">
        <Head>
          <title>{data?.pokemon.name}</title>
        </Head>
        <Header />
        <Link href="/">
          <Button colorScheme={"gray"}>Back to Home</Button>
        </Link>

        <>{isError && <ShowError />}</>
        {isFetching ? (
          <ShowLoading />
        ) : (
          <>
            <PokemonProfile props={data.pokemon} />
            <PokemonTypes pokeTypes={data.pokemon.types} />
            <PokemonMoves pokeMoves={data.pokemon.moves} />
          </>
        )}
      </Box>
    </>
  );
}

export default Details;

// import { Button, Stack } from "@chakra-ui/react";
// import request from "graphql-request";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { dehydrate, QueryClient, useQuery } from "react-query";
// import Header from "../../components/Header";
// import ShowError from "../../components/ShowError";
// import ShowLoading from "../../components/ShowLoading";
// import { GET_DETAIL_POKEMON } from "../../graphql/SpecificPokemon";

// export async function getServerSideProps(context: any) {
//   const name = context.params.name;
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery("pokemons", fetchPokemonDetail);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
// // const queryParams = new URLSearchParams(window.location.search);
// // const name = queryParams.get("name");

// const endpoint = `https://graphql-pokeapi.graphcdn.app/`;
// const gqlVariables = { name };

// async function fetchPokemonDetail() {
//   const data = await request(endpoint, GET_DETAIL_POKEMON, {name});
//   return data;
// }

// export default function Details() {
//   const { data, isLoading, isError } = useQuery("pokemon", fetchPokemonDetail);

//   return (
//     <Stack bg={"purple.200"}>
//       <Header />
//       <Link href="/">
//         <Button colorScheme={"gray"}>Go back to Home</Button>
//       </Link>

//       <>{isError && <ShowError />}</>
//       {isLoading ? <ShowLoading /> : <>{JSON.stringify(data)}</>}
//     </Stack>
//   );
// }

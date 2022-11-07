import { Box, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface IPokemons {
  pokemons: {
    pokemons: {
      count: number;
      results: [
        {
          name: string;
          image: string;
        }
      ];
    };
  };
}

function PokemonCards(data: IPokemons) {
  return (
    <SimpleGrid minChildWidth="160px" spacing="40px" textAlign="center" m={10}>
      {data?.pokemons.pokemons.results.map(
        (
          p: {
            image: string;
            name: string;
          },
          i: number
        ) => (
          <div key={i + 1}>
            <Link href={`/pokemon/${p.name}`}>
              <Box
                borderWidth="4px"
                borderRadius="lg"
                borderColor="honeydew"
                overflow="hidden"
                _hover={{
                  background: "blue.200",
                }}
              >
                <VStack>
                  <Text fontFamily={"mono"}>#{i + 1}</Text>

                  <Image
                    src={p.image}
                    alt={p.name}
                    w={{ base: "100px", sm: "130px", lg: "150px" }}
                    h={{ base: "100px", sm: "130px", lg: "150px" }}
                  />
                  <Box p="2" bg={"white"} borderTopRadius="lg">
                    <Box display="flex" alignItems="baseline">
                      <Text
                        fontFamily={"mono"}
                        textTransform="capitalize"
                        fontWeight="bold"
                      >
                        {p.name}
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </Link>
          </div>
        )
      )}
    </SimpleGrid>
  );

}

export default PokemonCards;

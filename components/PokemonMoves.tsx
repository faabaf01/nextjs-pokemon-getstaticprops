import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { PokemonMove } from "../graphql/SpecificPokemon";

interface Props {
  pokeMoves: PokemonMove[];
}

export default function PokemonMoves({ pokeMoves }: Props) {
  return (
    <>
      <Box textAlign={"center"}>
        <Heading fontFamily={"mono"} fontSize="2xl">
          Moves
        </Heading>
      </Box>

      <SimpleGrid
        minChildWidth="120px"
        spacing="4px"
        paddingBlock={10}
        paddingInline={20}
      >
        {pokeMoves.map((p: PokemonMove, i: number) => (
          <Box
            key={i}
            bg="yellow.200"
            width="120px"
            rounded="10"
            textAlign={"center"}
            p="5px"
          >
            {p.move.name}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

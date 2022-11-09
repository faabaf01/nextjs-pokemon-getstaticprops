import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

interface Props {
  pokeTypes: [
    {
      type: { name: string };
    }
  ];
}

export default function PokemonTypes({ pokeTypes }: Props) {
  return (
    <>
      <Box textAlign={"center"}>
        <Heading fontFamily={"mono"} fontSize="2xl">
          Types
        </Heading>
      </Box>
      <Flex justify="center">
        <Stack direction="row" paddingBlock={10} minWidth={7} spacing={"4px"}>
          {pokeTypes.map((p, i: number) => (
            <Box
              key={i}
              bg="orange.300"
              width="120px"
              rounded="10"
              textAlign={"center"}
              p="5px"
            >
              {p.type.name}
            </Box>
          ))}
        </Stack>
      </Flex>
    </>
  );
}

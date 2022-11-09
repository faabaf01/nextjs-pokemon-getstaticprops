import {
  Box,
  Circle,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  props: {
    name: string;
    id: number;
  };
}

export default function PokemonProfile({ props }: Props) {
  return (
    <Flex flex={1} justify={"center"}>
      <Stack align={"center"}>
        <Heading color={"GrayText"}>#{props.id}</Heading>

        <Circle bg={"honeydew"}>
          <Image
            w={{ base: "100px", sm: "150px", lg: "200px" }}
            h={{ base: "100px", sm: "150px", lg: "200px" }}
            objectFit={"fill"}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.id}.gif`}
            alt="pokemon-image"
          />
        </Circle>
        <Box p="14px">
          <Text
            fontSize={"3xl"}
            fontWeight="extrabold"
            textTransform={"uppercase"}
          >
            {props.name}
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
}

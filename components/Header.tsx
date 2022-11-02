import { Box, Heading, HStack, Spacer, Stack } from "@chakra-ui/react";
import PokemonLogo from "./PokemonLogo";

export default function Header() {
  return (
    <Box bg={"#0458a2"}>
      <Stack align={"center"} p={5}>
        <PokemonLogo />
      </Stack>
    </Box>
  );
}

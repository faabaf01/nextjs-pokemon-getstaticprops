import { Box, Stack } from "@chakra-ui/react";
import PokemonLogo from "./PokemonLogo";

export default function Header() {
  return (
    <Box bg={"#408f51"}>
      <Stack align={"center"} p={5}>
        <PokemonLogo />
      </Stack>
    </Box>
  );
}

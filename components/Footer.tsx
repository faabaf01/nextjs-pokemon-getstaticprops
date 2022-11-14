import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box bg="#408f51" textAlign={"center"}>
      <Text color="white" p={4}>
        Pokémon and its trademarks are ©1995-2022 Nintendo, Creatures, and
        GAMEFREAK.
      </Text>
    </Box>
  );
}

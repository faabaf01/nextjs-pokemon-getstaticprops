import { Image } from "@chakra-ui/react";

export default function PokemonLogo() {
  return (
    <Image
      src="https://i.imgur.com/iPvcyJv.png"
      alt="logo"
      h={{ base: "60px", sm: "60px", md: "70px", lg: "80px" }}
      w={{ base: "150px", sm: "150px", md: "190px", lg: "200px" }}
    />
  );
}

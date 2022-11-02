import { Flex, Spinner } from "@chakra-ui/react";

export default function ShowLoading() {
  return (
    <Flex justify={"center"} pb="50px">
      <Spinner
        thickness="6px"
        speed="0.65s"
        emptyColor="white"
        color="purple.400"
        size="xl"
      />
    </Flex>
  );
}

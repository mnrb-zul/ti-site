"use client";
import { ChakraProvider,Box , Flex} from "@chakra-ui/react";
import theme from "../../../styles/theme";
import Navbar from "@/app/components/navbar";
import Content from "./Content";

export default function Page() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" bg="#e8f4ed" h="100vh">
        <Navbar/>
        <Content/>
      </Flex>
    </ChakraProvider>
  );
}

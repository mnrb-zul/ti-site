"use client";

import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import MainContent from "./maincontent";
import theme from "../styles/theme";

export default function Page() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#e8f4ed">
        <Navbar/>
        <MainContent />
      </Box>
    </ChakraProvider>
  );
}

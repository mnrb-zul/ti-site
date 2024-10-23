"use client";

import {Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar";
import MainContent from "./maincontent";
import theme from "../../styles/theme";

export default function TestPage() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#e8f4ed">
        <Navbar />
        <MainContent />
      </Box>
    </ChakraProvider>
  );
}

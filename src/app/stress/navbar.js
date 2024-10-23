// components/Navbar.jsx
"use client";

import {
  Box,
  Flex,
  Button,
  HStack,
  Image,
  ChakraProvider,
  Center,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, LockIcon } from "@chakra-ui/icons";
import Link from "next/link";

function Navbar() {
  return (
    <ChakraProvider>
      <Box px={4}>
        <Flex h={20} alignItems="center">
          <Box
            p={1}
            ml="2%"
            bg="white"
            h="full"
            borderBottomRadius={10}
            w="5em"
          >
            <Center>
              <Image
                src="/image/ti-icon.png"
                objectFit={"contain"}
                align="center"
                width="80%"
                top="50%"
                left="50%"
              />
            </Center>
          </Box>
          <HStack align="left" justifyContent="left" flex="1" gap="8%" pl="7%">
            <Link href="/" passHref>
              <Button
                variant="link"
                color="#1b6c44"
                _hover={{ color: "#8bc443" }}
              >
                Home
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button
                variant="link"
                color="#1b6c44"
                _hover={{ color: "#8bc443" }}
              >
                About
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant="link"
                color="#1b6c44"
                _hover={{ color: "#8bc443" }}
              >
                Contact
              </Button>
            </Link>
          </HStack>
          <Box justify="flex-end" pr={4} width={"auto"}>
            <LockIcon color={"#1b6c44"} _hover={{ color: "#8bc443" }} />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Navbar;

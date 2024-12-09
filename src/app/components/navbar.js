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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import theme from "../../styles/theme";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const menuMouseEvent = (state)=>{
    clearTimeout(timeoutId)
    if (state==false){
      timeoutId = setTimeout(()=>{
        setIsOpen(false)
      },300)
    }
    setIsOpen(true)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box px={4} mb={8} bg="#e8f4ed">
        <Flex h={20} alignItems="center" bg="#e8f4ed">
          <Box
            p={1}
            bg="#f8f8f6"
            h="full"
            borderBottomRadius={10}
            w="5em"
            justifyItems={"center"}
          >
            <Link href="/" display="inline-block" justifyItems={"center"}>
              <Image
                src="/image/ti-icon.png"
                objectFit={"contain"}
                align="center"
                width="80%"
              />
            </Link>
          </Box>
          <HStack align="left" justifyContent="left" flex="1" gap="8%" pl="7%">
            <Menu isOpen={isOpen}>
              <MenuButton
                as={Button}
                variant="link"
                color="#1b6c44"
                _hover={{ color: "#8bc443" }}
                onMouseEnter={()=>menuMouseEvent(true)}
                onMouseLeave={()=>menuMouseEvent(false)}
              >
                JPJ Status
              </MenuButton>
              <MenuList bg="#c3ecdc">
                <MenuItem
                  as="a"
                  href="/jpj/status"
                  bg="#c3ecdc"
                  color="#1b6c44"
                  _hover={{ color: "#8bc443" }}
                  onMouseEnter={() => menuMouseEvent(true)}
                  onMouseLeave={() => menuMouseEvent(false)}
                >
                  JPJ e-Cover Note Status
                </MenuItem>
                <MenuItem
                as="a"
                href="/jpj/used"
                  color="#1b6c44"
                  _hover={{ color: "#8bc443" }}
                  bg="#c3ecdc"
                  onMouseEnter={() => menuMouseEvent(true)}
                  onMouseLeave={() => menuMouseEvent(false)}
                >
                  JPJ e-Cover Note Used
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Navbar;

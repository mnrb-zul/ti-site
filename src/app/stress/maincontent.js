import { ChakraProvider, Image, VStack, Box, HStack } from "@chakra-ui/react";

export default function MainContent() {
  return (
    <ChakraProvider>
      <VStack h="100%">
        <Box w="60em" h="19em" overflow="hidden" mt="2em" borderRadius={20} bg="purple">
          <HStack>
            <Box width="60%" bg="red">John Wick</Box>
            <Image
              src="/image/infosystem.jpg"
              objectFit="cover"
              width="40%"
              heigh="100%"
              layout="fill"
            />
          </HStack>
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

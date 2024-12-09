import { ChakraProvider, Image, VStack, Box, HStack } from "@chakra-ui/react";

export default function MainContent() {
  return (
    <ChakraProvider>
      <VStack h="100%">
        <Box w="80%" h="auto" overflow="hidden" mt="2em" borderRadius={20} >
          <HStack>
            <Image
              src="/image/banner.png"
              objectFit="cover"
            />
          </HStack>
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

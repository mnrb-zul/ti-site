import { Flex, Text } from "@chakra-ui/react";

export default function Status({successMsg,errorMsg}){
  return (
      <Flex justifyContent={"center"}>
        {successMsg && (
          <Text w="50%" textAlign={"left"} mt={5}>
            {successMsg}
          </Text>
        )}
        {errorMsg && (
          <Text w="50%" textAlign={"left"} mt={5}>
            {errorMsg}
          </Text>
        )}
      </Flex>
  )
}
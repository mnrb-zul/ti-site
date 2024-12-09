import Status from "@/app/components/status";
import {
  ChakraProvider,
  Text,
  Flex,
  Spacer,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Content() {
  const [referenceType, setReferenceType] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const submitData = async (data) => {
    setSuccessMsg("berjaya");
  };
  const handleReset = () => {
    setReferenceNo("");
    setReferenceType("");
  };
  return (
    <ChakraProvider>
      <Flex direction="column" h="50vh" justify="center" align="center" mt={10}>
        <Text fontSize="2xl" fontWeight={"bold"} textAlign={"center"}>
          JPJ e-Cover Note Reply Status Enquiry
        </Text>
        <Spacer />
        <Flex w="50%" alignItems={"center"}>
          <Text fontSize="md" textAlign={"left"} w="60%">
            Select Reference Type
          </Text>
          <Select
            placeholder="Select an option"
            size="md"
            flex="1"
            value={referenceType}
            variant="outline"
            borderColor={"black"}
            focusBorderColor="#8bc443"
            onChange={(e) => setReferenceType(e.target.value)}
          >
            <option value="cover_note_no">Cover Note No.</option>
            <option value="veh_no">Vehicle No.</option>
            <option value="pol_no">Policy No.</option>
          </Select>
        </Flex>
        <Flex w="50%" alignItems={"center"} mt={4}>
          <Text fontSize="md" textAlign={"left"} w="60%">
            Enter Reference Number
          </Text>
          <Input
            size="md"
            flex="1"
            variant="outline"
            borderColor={"black"}
            focusBorderColor="#8bc443"
            value={referenceNo}
            onChange={(e) => setReferenceNo(e.target.value)}
          />
        </Flex>
        <Flex alignContent={"left"} mt="4" w="50%" gap={3}>
          {/* submit */}
          <Button
            variant="outline"
            color="#8bc443"
            _hover={{ bg: "#8bc443", color: "white" }}
            borderRadius={25}
            onClick={() => submitData()}
          >
            <Text fontSize={"md"}>Submit</Text>
          </Button>
          <Button
            variant="outline"
            color="#bf616a"
            _hover={{ bg: "#bf616a", color: "white" }}
            borderRadius={25}
            onClick={handleReset}
          >
            <Text fontSize={"md"}>Reset</Text>
          </Button>
        </Flex>
      </Flex>
      <Status errorMsg={errorMsg} successMsg={successMsg} />
    </ChakraProvider>
  );
}

import type { NextPage } from "next";

import {
  Flex,
  Box,
  Center,
  Input,
  Text,
  Textarea,
  List,
  ListItem,
  HStack,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  IconButton,
  Link,
  Button
} from "@chakra-ui/react";
import { FiTrash } from "react-icons/fi";

const Home: NextPage = () => {

  
  return (
    <Center bg="blue.600" h="100vh" w="100vw">
      <HStack
        bg="white"
        width={"600px"}
        p="5"
        alignItems={"flex-start"}
        spacing={4}
      >
        <Box flex="50%">
          <Heading size={"lg"}>Create a post</Heading>
          <VStack spacing={2} mt={2}>
            <FormControl>
              <FormLabel>Title:</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Descripción:</FormLabel>
              <Textarea />
            </FormControl>
            <HStack justifyContent={"flex-end"} w="full">
              <Button colorScheme={"facebook"}>
                Guardar
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box flex="50%">
          <Heading size={"lg"} mb={2}>
            Posts:
          </Heading>
          <List overflowY={"scroll"} maxH="350px">
            {Array.from({ length: 20 }).map((_, idx) => (
              <ListItem py="1" key={idx} px="3">
                <Flex justifyContent={"space-between"}>
                  <Link>Post nr1</Link>
                  <IconButton color="white" bg="red.500" icon={<FiTrash />} aria-label="Delete" />
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>
      </HStack>
    </Center>
  );
};

export default Home;

import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex p="2rem" direction="column" alignItems="center">
        <Heading as="h1" size="4xl" noOfLines={1} className="tasklist-title">
          TaskList
        </Heading>
        <Text mt="1rem" className="tasklist-slogan">
          La meilleure TodoList de tous les temps !
        </Text>
      </Flex>
    </>
  );
};

export default Header;

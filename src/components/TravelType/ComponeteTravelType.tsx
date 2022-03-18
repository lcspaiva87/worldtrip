import { Box, Flex, Image, Text } from "@chakra-ui/react";
interface ComponentsTravelTyleProps {
  srcProps: string;
  altProps: string;
  textProps: string;
}

export function ComponentsTravelTyle({ srcProps, altProps, textProps }: ComponentsTravelTyleProps) {
  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      <Image src={srcProps} alt={altProps} />
      <Text color='gray.500' fontWeight='bold' fontSize='30'>{textProps}</Text>
    </Flex>
  )
}
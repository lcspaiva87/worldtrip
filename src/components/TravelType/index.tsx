import { Flex } from "@chakra-ui/react";
import { TravelTypesItem } from "./ComponeteTravelType"

export function TravelTypes() {

  return (
    <Flex
      w="100%"
      justifyContent="space-around"
      px="16"
      mt="32"
      mb="16"
      flexWrap="wrap"

    >
      <TravelTypesItem image='/cocktail 1.svg' text="Vida noturna" />
      <TravelTypesItem image='/surf 1.svg' text="Praia" />
      <TravelTypesItem image='/Modern.svg' text="Moderno" />
      <TravelTypesItem image='/Classic.svg' text="Clássico" />
      <TravelTypesItem image='/More.svg' text="e mais..." />
    </Flex>
  );
}
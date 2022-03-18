import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { ComponentsTravelTyle } from "./ComponeteTravelType";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "repeat(5, 1fr)"]}
      gap={[1, 5]}
      w="100%"
      maxWidth={1160}
      mt={["10", "32"]}
      mx="auto">
      <GridItem>
        <ComponentsTravelTyle srcProps='/cocktail 1.svg' textProps="vida noturna" altProps="vida noturna" />
      </GridItem>
      <GridItem>
        <ComponentsTravelTyle srcProps='/surf 1.svg' textProps="praia" altProps="praia" />
      </GridItem>
      <GridItem>
        <ComponentsTravelTyle srcProps='/Modern.svg' textProps="moderno" altProps="moderno" />
      </GridItem>
      <GridItem>
        <ComponentsTravelTyle srcProps='/Classic.svg' textProps="clássico" altProps="clássico" />
      </GridItem>

      <GridItem>
        <ComponentsTravelTyle srcProps='/More.svg' textProps="e mais..." altProps="e mais..." />
      </GridItem>


    </Grid >
  )
}
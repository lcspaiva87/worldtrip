import { Image, Flex } from '@chakra-ui/react'
export function Header() {
  return (
    <Flex justifyContent='center' mt='3'>
      <Image src='/logo.svg' />
    </Flex>
  )
}
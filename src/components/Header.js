import {
  Box,
  Text,
  Flex,
  Stack,
  Image,
  HStack,
  Button,
  IconButton,
  Link,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
function Navbar() {
  return (
    <HStack
      h="94px"
      top={0}
      justify="center"
      align="center"
      spacing="20px"
      pos="fixed"
      w="100%"
      boxShadow="0 0 12px 0 rgb(0 0 0 / 50%)"
      zIndex="1000"
      background="white"
    >
      <Link href="#">
        <Image
          src="/assets/images/logo_elsa.png"
          alt="logoElsa"
          w="62px"
          h="62px"
        />
      </Link>
      <Text fontSize="20px" letterSpacing="8px">
        ELSA
      </Text>
    </HStack>
  )
}
const headerData = [
  {
    title: `app luyện nói  & giao tiếp tiếng anh thời 4.0`,
    slogan: 'với elsa speak - ai cũng có thể nói tiếng anh hay!',
  },
]
const Header = () => {
  const handleClick = () => {}
  return (
    <Box>
      <Navbar />
      <Flex minH="406px" pos="relative" justify="space-between" mt="94px">
        <Image
          src="/assets/images/headerImg/item1.png"
          pos="absolute"
          boxSize="109px"
          opacity={0.5}
          top="189px"
        />
        <Stack
          w="634px"
          align="center"
          pl="114px"
          pt="71px"
          textTransform="uppercase"
        >
          <Text fontSize="34px" textAlign="center" fontWeight="700" h="112px">
            {headerData[0].title}
          </Text>
          <Text color="#06BAE8" fontSize="18px" fontWeight="300">
            {headerData[0].slogan}
          </Text>
          <Button
            mt="32px !important"
            w="274px"
            h="67px"
            fontSize="24px"
            borderRadius="20px"
            fontWeight="700"
            _hover={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,178,127,1) 0%, rgba(0,146,179,1) 100%)',
            }}
            background="linear-gradient(80.25deg, #3DFFC8 1.31%, #40F6CF 15.32%, #49DCE1 38.61%, #57B3FF 68.19%);"
            variant="none"
            onClick={handleClick}
          >
            Đăng ký ngay
          </Button>
        </Stack>
        <Box pr="194px" h="406px" pos="relative">
          <Image
            src="/assets/images/headerImg/phone.png"
            w="302px"
            overflow="hidden"
          />
          <Box
            borderRadius="100%"
            border="4px solid #ECECEC"
            pos="absolute"
            top="58px"
            right="194px"
            w="318px"
            h="318px"
            zIndex="-1"
          >
            <IconButton
              icon={<Icon icon="tabler:wave-sine" />}
              boxSize="44px"
              px="0"
              top="36px"
              py="0"
              bgGradient="linear(to-b, #FCB23A, #F25C64)"
            />
            <IconButton
              icon={<Icon icon="bi:mic-fill" />}
              boxSize="42px"
              px="0"
              py="0"
              top="100px"
              right="66px"
              bgGradient="linear(to-b, #65d6fc, #489dfb)"
            />
            <IconButton
              icon={<Icon icon="fluent:headphones-32-filled" />}
              boxSize="30px"
              px="0"
              top="167px"
              right="100px"
              py="0"
              bgGradient="linear(to-b, #F492A7, #F16D9D)"
            />
            <IconButton
              boxSize="20px"
              borderRadius="2px"
              px="0"
              top="238px"
              py="0"
              right="88px"
              bg="#FFCF5D"
            />
            <IconButton
              icon={<Icon icon="ri:message-2-fill" fontSize="30px" />}
              boxSize="56px"
              px="0"
              top="102px"
              py="0"
              right="-146px"
              bgGradient="linear(to-b,#AC5AFF, #7659FF)"
            />
            <IconButton
              boxSize="32px"
              px="0"
              top="289px"
              py="0"
              right="-60px"
              bgGradient="linear(to-b,#AC5AFF, #7659FF)"
            />
          </Box>
          <Box
            borderRadius="100%"
            border="4px solid #ECECEC"
            pos="absolute"
            top="92px"
            right="233px"
            w="246px"
            h="246px"
            zIndex="-1"
          ></Box>
          <Box
            borderRadius="100%"
            border="4px solid #ECECEC"
            pos="absolute"
            top="132px"
            right="270px"
            w="168px"
            h="168px"
            zIndex="-1"
          ></Box>
        </Box>
        <Image
          pos="absolute"
          zIndex="-1"
          src="/assets/images/headerImg/item2_blur.png"
          boxSize="233px"
          bottom="-60px"
          right="-30px"
        />
      </Flex>
    </Box>
  )
}

export default Header

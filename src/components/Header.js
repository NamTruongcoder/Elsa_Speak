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
    title: 'app luyện nói & giao tiếp tiếng anh thời 4.0',
    slogan: 'với elsa speak - ai cũng có thể nói tiếng anh hay!',
  },
]
const Header = () => {
  return (
    <Box>
      <Navbar />
      <Flex h="406px" pos="relative" justify="space-between" mt="94px">
        <Image
          src="/assets/images/headerImg/item1.png"
          pos="absolute"
          w="109px"
          h="109px"
          opacity={0.5}
          top="110px"
        />
        <Stack
          w="634px"
          align="center"
          pl="114px"
          pt="71px"
          textTransform="uppercase"
        >
          <Text fontSize="30px" textAlign="center" fontWeight="bold" h="112px">
            {headerData[0].title}
          </Text>
          <Text color="#06BAE8" fontSize="16px" h="33px">
            {headerData[0].slogan}
          </Text>
          <Button
            w="274px"
            h="67px"
            fontSize="30px"
            lineHeight="42px"
            borderRadius="20px"
            fontWeight="700"
            background="linear-gradient(80.25deg, #3DFFC8 1.31%, #40F6CF 15.32%, #49DCE1 38.61%, #57B3FF 68.19%);"
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
              icon={<Icon icon="tabler:wave-sine" width="20px" h="20px" />}
              w="43px"
              h="43px"
              px="0"
              top="60px"
              py="0"
              bgGradient="linear(to-b, #FCB23A, #F25C64)"
            />
            <IconButton
              icon={<Icon icon="bi:mic-fill" />}
              w="43px"
              h="43px"
              px="0"
              py="0"
              top="126px"
              right="66px"
              bgGradient="linear(to-b, #65d6fc, #489dfb)"
            />
            <IconButton
              icon={<Icon icon="fluent:headphones-32-filled" />}
              w="43px"
              h="43px"
              px="0"
              top="200px"
              py="0"
              right="81px"
              bgGradient="linear(to-b, #F492A7, #F16D9D)"
            />
            <IconButton
              w="20px"
              h="20px"
              borderRadius="2px"
              px="0"
              top="240px"
              py="0"
              right="124px"
              bg="#FFCF5D"
            />
            <IconButton
              icon={<Icon icon="ri:message-2-fill" fontSize="24px" />}
              w="50px"
              h="50px"
              px="0"
              top="240px"
              py="0"
              right="124px"
              bgGradient="linear(to-b,#AC5AFF, #7659FF)"
            />
            <IconButton
              w="50px"
              h="50px"
              px="0"
              top="240px"
              py="0"
              right="150px"
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
          w="233px"
          h="233px"
          bottom="0"
          right="0"
        />
      </Flex>
    </Box>
  )
}

export default Header

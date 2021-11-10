import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Checkbox,
  HStack,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
function BackgroundForm() {
  return (
    <Box minH="830px" bg="#0C2440" pos="relative">
      <Box pos="absolute" right="0" top="80px" zIndex="10">
        <Image src="/assets/images/formImg/Phone 15 1.png" alt="phone" />
      </Box>
      <Box pos="absolute" right="52px" bottom="250px">
        <Image src="/assets/images/formImg/square_pink.png" alt="square" />
      </Box>
      <Box pos="absolute" right="250px" top="175px" zIndex="1">
        <Image src="/assets/images/formImg/square_yellow.png" alt="square" />
      </Box>
      <Box pos="absolute" bottom="150px" right="465px">
        <Image src="/assets/images/formImg/circel.png" alt="square" />
      </Box>
      <Box pos="absolute" bottom="210px" right="800px" boxSize="30px">
        <Image src="/assets/images/formImg/circel.png" alt="square" />
      </Box>
      {/* Form */}
      <Box
        w="600px"
        borderRadius="15px"
        overflow="hidden"
        pos="absolute"
        left="131px"
        top="64px"
      >
        <Box padding="16px 80px" bgGradient="linear(to-r,#49DCE1,  #38A3F8)">
          <Heading as="h2" color="white">
            CÙNG ỨNG DỤNG ELSA NÓI TIẾNG ANH "THẢ GA"
          </Heading>
        </Box>
        <Box bg="white">
          <FormControl px="32px" color="#06BAE8">
            <FormLabel htmlFor="name">
              <Icon
                icon="fa-regular:user"
                style={{ display: 'inline-block', marginRight: '23px' }}
              />
              Họ tên *
            </FormLabel>
            <Input type="name" id="name" />
            <FormLabel htmlFor="phone">
              <Icon
                icon="carbon:phone"
                style={{ display: 'inline-block', marginRight: '23px' }}
              />
              Số Điện thoại *
            </FormLabel>
            <Input type="phone" id="phone" />
            <FormLabel htmlFor="email">
              <Icon
                icon="clarity:email-line"
                style={{ display: 'inline-block', marginRight: '23px' }}
              />
              Email address *
            </FormLabel>
            <Input type="email" id="email" />
            <HStack spacing={10} direction="row">
              <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
                Gói học 1 năm
              </Checkbox>
              <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
                Góitrọn đời
              </Checkbox>
            </HStack>
            <Button
              background="linear-gradient(80.25deg, #3DFFC8 1.31%, #40F6CF 15.32%, #49DCE1 38.61%, #57B3FF 68.19%)"
              w="100%"
              borderRadius="15px"
            >
              GỬI ĐĂNG KÝ
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}
const FormAccout = () => {
  return (
    <>
      <BackgroundForm />
    </>
  )
}

export default FormAccout

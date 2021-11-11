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
  Text,
  Spacer,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import isEmpty from 'validator/lib/isEmpty'
function BackgroundForm() {
  return (
    <Box minH="830px" bg="#0C2440" pos="relative" zIndex="2">
      <Box pos="absolute" right="0" top="80px" zIndex="10">
        <Image src="./assets/images/formImg/Phone 15 1.png" alt="phone" />
      </Box>
      <Box pos="absolute" right="52px" bottom="250px">
        <Image src="./assets/images/formImg/square_pink.png" alt="square" />
      </Box>
      <Box pos="absolute" right="250px" top="175px" zIndex="1">
        <Image src="./assets/images/formImg/square_yellow.png" alt="square" />
      </Box>
      <Box pos="absolute" bottom="150px" right="465px">
        <Image src="./assets/images/formImg/circel.png" alt="square" />
      </Box>
      <Box pos="absolute" bottom="210px" right="800px" boxSize="30px">
        <Image src="./assets/images/formImg/circel.png" alt="square" />
      </Box>
    </Box>
  )
}
const FormAccout = () => {
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState('')
  const [validationMsg, setValidationMsg] = useState('')
  const onChangeUserName = (e) => {
    const value = e.target.value
    console.log(value)
    setUsername(value)
  }
  const onChangePhone = (e) => {
    const value = e.target.value
    setPhone(value)
  }
  const onChangeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }
  const handleCheck = (e) => {
    setChecked(e.target.value === 'lifetime' ? 'lifetime' : 'year')
  }
  const validateAll = () => {
    const msg = {}
    if (isEmpty(email)) {
      msg.email = 'Please input your Email'
    }
    if (!isEmpty(email) && email.search(/^.+@.+\..+$/i) === -1) {
      msg.email = 'Email is wrong format '
    }
    if (isEmpty(username)) {
      msg.username = 'Please input your name'
    }
    if (isEmpty(phone)) {
      msg.phone = 'Please input your phone'
    }
    if (!isEmpty(phone) && phone.search(/\d/i) === -1) {
      msg.phone = 'Phone is wrong format'
    }
    if (isEmpty(checked)) {
      msg.checked = 'Please choose one course'
    }
    setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }
  const onSubmit = () => {
    const isValid = validateAll()
    if (!isValid) return
    // Call API submit
    alert('Ban da dang ky thanh cong')
  }
  return (
    <>
      <BackgroundForm />
      {/* Form */}
      <Box
        maxW={{ mobile: '400px', tablet: '600px' }}
        borderRadius="15px"
        overflow="hidden"
        pos={{ mobile: 'relative', desktop: 'absolute' }}
        left={{ desktop: '131px' }}
        top={{ desktop: '20%' }}
        mt="60px"
        ml="auto"
        mr="auto"
        id="Form"
        zIndex="10"
      >
        <Box padding="16px 80px" bgGradient="linear(to-r,#49DCE1,  #38A3F8)">
          <Text
            textAlign="center"
            fontSize={{ mobile: '18px', desktop: '35px' }}
            fontWeight="700"
            color="#fff"
          >
            CÙNG ỨNG DỤNG ELSA NÓI TIẾNG ANH "THẢ GA"
          </Text>
        </Box>
        <Box bg="white" p="32px">
          <FormControl color="#06BAE8">
            <FormLabel fontSize="25px" fontWeight="300" htmlFor="name">
              <Icon
                icon="fa-regular:user"
                style={{ display: 'inline-block', marginRight: '23px' }}
              />
              Họ tên *
            </FormLabel>
            <Input
              value={username}
              type="name"
              id="name"
              borderColor="#06BAE8"
              onChange={onChangeUserName}
            />
            <Text color="red">{validationMsg.username}</Text>
            <FormLabel
              mt="16px"
              fontSize="25px"
              fontWeight="300"
              htmlFor="phone"
            >
              <Icon
                icon="carbon:phone"
                style={{ display: 'inline-block', marginRight: '23px' }}
                fonstSize="20px"
              />
              Số Điện thoại *
            </FormLabel>
            <Input
              value={phone}
              type="phone"
              id="phone"
              borderColor="#06BAE8"
              onChange={onChangePhone}
            />
            <Text color="red">{validationMsg.phone}</Text>
            <FormLabel
              mt="16px"
              fontSize="25px"
              fontWeight="300"
              htmlFor="email"
            >
              <Icon
                icon="clarity:email-line"
                style={{ display: 'inline-block', marginRight: '23px' }}
              />
              Email address *
            </FormLabel>
            <Input
              value={email}
              type="email"
              id="email"
              borderColor="#06BAE8"
              onChange={onChangeEmail}
            />
            <Text color="red">{validationMsg.email}</Text>
            <HStack direction="row" mt="24px" mb="32px">
              <Checkbox
                size="lg"
                value="year"
                borderColor="#06BAE8"
                isChecked={checked === 'year'}
                onChange={handleCheck}
              >
                Gói học 1 năm
              </Checkbox>
              <Spacer />
              <Checkbox
                size="lg"
                value="lifetime"
                borderColor="#06BAE8"
                isChecked={checked === 'lifetime'}
                onChange={handleCheck}
              >
                Gói trọn đời
              </Checkbox>
            </HStack>
            {checked === 'year' ? (
              <Box>
                <Text
                  textAlign="center"
                  fontSize="30px"
                  color="#0bbae7"
                  fontWeight="600"
                >
                  989.000 VND
                </Text>
                <Text
                  textAlign="center"
                  fontSize="20px"
                  color="red"
                  fontStyle="italic"
                  py="16px"
                >
                  ELSA trợ giá mùa dịch - Nhập mã COVID50 giảm thêm 50K khi
                  thanh toán online
                </Text>
              </Box>
            ) : checked === 'lifetime' ? (
              <Box>
                <Text
                  textAlign="center"
                  fontSize="30px"
                  color="#0bbae7"
                  fontWeight="600"
                >
                  1.995.000 VND
                </Text>
                <Text
                  textAlign="center"
                  fontSize="20px"
                  color="red"
                  fontStyle="italic"
                  py="16px"
                >
                  ELSA trợ giá mùa dịch - Nhập mã COVID50 giảm thêm 50K khi
                  thanh toán online
                </Text>
              </Box>
            ) : (
              ''
            )}
            <Text color="red">{validationMsg.checked}</Text>
            <Button
              background="linear-gradient(80.25deg, #3DFFC8 1.31%, #40F6CF 15.32%, #49DCE1 38.61%, #57B3FF 68.19%)"
              w="100%"
              h="74px"
              _hover={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,178,127,1) 0%, rgba(0,146,179,1) 100%)',
              }}
              variant="none"
              borderRadius="14px"
              fontSize="22px"
              type="submit"
              onClick={onSubmit}
            >
              GỬI ĐĂNG KÝ
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
export default FormAccout

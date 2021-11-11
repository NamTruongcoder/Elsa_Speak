import {
  SimpleGrid,
  Box,
  Text,
  Image,
  Button,
  Heading,
  Link,
  Flex,
} from '@chakra-ui/react'
import parse from 'html-react-parser'
const courseData = [
  {
    _id: 0,
    img: './assets/images/courseImg/phone_3.png',
    title: 'Trí tuệ nhân tạo trả về bạn số điểm <b>"CHUẨN BẢN XỨ" </b> ',
  },
  {
    _id: 1,
    img: './assets/images/courseImg/phone_4.png',
    title:
      '<b>"NGAY LẬP TỨC"</b>, bạn biết mình phát âm sai ở đâu qua những gam màu trực quan sinh động. ',
  },
  {
    _id: 2,
    img: './assets/images/courseImg/phone_2.png',
    title: '<b>CÔNG NGHỆ NHẬN DIỆN</b> giọng nói chuẩn đến từng âm tiết. ',
  },
  {
    _id: 3,
    img: './assets/images/courseImg/phone_1.png',
    title:
      'ELSA sẽ <b>LẬP LỘ TRÌNH HỌC CÁ NHÂN HOÁ</b> dựa trên các chỉ số bài kiểm tra đầu vào của bạn. ',
  },
]
const Course = () => {
  return (
    <Box textAlign="center" margin="0 auto" pt="60px">
      <Box mb="40px">
        <Text
          fontSize="40px"
          fontWeight="bold"
          textTransform="uppercase"
          color="#606060"
          mb="20px"
        >
          Cá nhân hóa lộ trình học
        </Text>
        <Text color="#606060" fontSize="20px">
          Làm bài kiểm tra đầu vào với ELSA trong vòng 5 phút và bạn sẽ có :
        </Text>
      </Box>

      <SimpleGrid columns={{ mobile: 1, tablet: 2, desktop: 4 }} spacing="10px">
        {courseData.map((course) => (
          <Flex justify="center">
            <Box w="285px" key={course._id} px="20px">
              <Box w="255px" margin="0 auto">
                <Image src={course.img} alt="course" objectFit="cover" />
              </Box>
              <Text
                textAlign="justify"
                mt="40px"
                fontSize="20px"
                color="#606060"
                lineHeight="1.5em"
              >
                {parse(course.title)}
              </Text>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>

      <Button
        background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,178,127,1) 0%, rgba(4,187,229,1) 100%)"
        _hover={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,178,127,1) 0%, rgba(0,146,179,1) 100%)',
        }}
        mt="40px"
        w="307px"
        h="60px"
        fontSize="24px"
        variant="none"
        id="form"
      >
        <Link
          href="#Form"
          py="16px"
          px="30px"
          style={{
            textDecoration: 'none',
          }}
        >
          Đăng Kí Ngay
        </Link>
      </Button>
    </Box>
  )
}

export default Course

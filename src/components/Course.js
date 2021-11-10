import { SimpleGrid, Box, Text, Image, Button } from '@chakra-ui/react'
const courseData = [
  {
    _id: 0,
    img: '/assets/images/courseImg/phone_3.png',
    title: 'Trí tuệ nhân tạo trả về bạn số điểm "CHUẨN BẢN XỨ"',
  },
  {
    _id: 1,
    img: '/assets/images/courseImg/phone_4.png',
    title:
      '"NGAY LẬP TỨC", bạn biết mình phát âm sai ở đâu qua những gam màu trực quan sinh động. ',
  },
  {
    _id: 2,
    img: '/assets/images/courseImg/phone_2.png',
    title: 'CÔNG NGHỆ NHẬN DIỆN giọng nói chuẩn đến từng âm tiết. ',
  },
  {
    _id: 3,
    img: '/assets/images/courseImg/phone_1.png',
    title:
      'ELSA sẽ LẬP LỘ TRÌNH HỌC CÁ NHÂN HOÁ dựa trên các chỉ số bài kiểm tra đầu vào của bạn. ',
  },
]
const Course = () => {
  return (
    <Box textAlign="center" w="1140px" margin="0 auto">
      <Box>
        <Text fontSize="40px">Cá nhân hóa lộ trình học</Text>
        <Text>
          Làm bài kiểm tra đầu vào với ELSA trong vòng 5 phút và bạn sẽ có :
        </Text>
      </Box>

      <SimpleGrid columns={4} spacing="10px">
        {courseData.map((course) => (
          <Box w="285px" key={course._id} px="20px">
            <Box w="215px" margin="0 auto">
              <Image src={course.img} alt="course" objectFit="cover" />
            </Box>
            <Text mt="40px">{course.title}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Button background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,178,127,1) 0%, rgba(4,187,229,1) 100%)">
        ĐĂNG KÝ NGAY
      </Button>
    </Box>
  )
}

export default Course

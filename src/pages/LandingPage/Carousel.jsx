import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel
} from "chakra-framer-carousel";
import { ChevronLeft, ChevronRight } from "react-feather";

const testimonials = [
  {
    name: "Jane Cooper",
    title: "CEO at ABC Corporation",
    bg: "red.200",
    src: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    heading: "Efficient Collaborating"
  },
  {
    name: "Kai Doe",
    title: "VP of Engineering",
    bg: "orange.200",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Intuitive Design"
  },
  {
    name: "Gina Smith",
    title: "Product Manager",
    bg: "blue.200",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Mindblowing Service"
  },
  {
    name: "Brad Watkins",
    title: "Founder",
    bg: "purple.200",
    src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Game Changer!"
  }
];

const Testimonial = ({ bg, heading, src, name, title }) => {
  const { onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  
  return (
    <Flex
      w={isCenter ? "375px" : "325px"}
      h={isCenter ? "250px" : "200px"}
      pos="relative"
      boxShadow="lg"
      align="center"
      as="button"
      onClick={onClickHandler}
      bg={bg}
      rounded="xl"
      justify="center"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: bg,
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <VStack p={10}>
        <Heading as="h3" fontSize="xl">
          {heading}
        </Heading>
        <Text fontSize="sm" textAlign="center">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.`}
        </Text>
        <Flex align="center" mt={8} direction="column">
          <Avatar src={src} mb={2} />
          <Stack spacing={-1} align="center">
            <Text fontWeight={600}>{name}</Text>
            <Text fontSize="sm" color="gray.600">
              {title}
            </Text>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
};

function TestimonialDemo() {
  const { onNext, onPrevious } = useCarousel();
  
  return (
    <Flex flexDir="column">
      <Carousel>
        <Flex w="fit-content" pos="relative">
          <CarouselItems mx={2}>
            {testimonials.map(({ name, title, bg, src, heading }, index) => (
              <CarouselItem index={index} key={name}>
                <Box p={10}>
                  <Testimonial
                    heading={heading}
                    bg={bg}
                    src={src}
                    name={name}
                    title={title}
                  />
                </Box>
              </CarouselItem>
            ))}
          </CarouselItems>

          <Flex pos="absolute" left="10px" top="35%">
            <Button size="lg" variant="solid" onClick={onPrevious}>
              <ChevronLeft />
            </Button>
          </Flex>
          <Flex pos="absolute" right="10px" top="35%">
            <Button size="lg" variant="solid" onClick={onNext}>
              <ChevronRight />
            </Button>
          </Flex>
        </Flex>
      </Carousel>
    </Flex>
  );
}

export default TestimonialDemo;

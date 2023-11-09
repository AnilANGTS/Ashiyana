import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Img,
  HStack,
} from '@chakra-ui/react';
import LogoI from '../../assets/logo.svg'
import Insta from '../../assets/Instagram.svg'
import FacBook from '../../assets/Facebook.svg'
import Youtube from '../../assets/Youtube.svg'
import Footer from '../../assets/Footer2.svg'


const Logo = (props) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* SVG path code for logo */}
    </svg>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      mt={'7'}
      // bg={'#071952'}
      backgroundImage={Footer}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'fixed'}
      backgroundSize={'cover'}
      w={'full'}
      opacity={'999'}
      color={'#FFFFFF'}
    >
      <Container  as={Stack} maxW={'8xl'} h={{ base: 'max-content', md: '60' }} py={10}>
        <SimpleGrid justifyContent={'center'}gap={'8'}  templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }} >
          <Box  align={'center'}>
            <Box justifyItems={'start'}>
              <Img src={LogoI}></Img>
            </Box>
            <Text mt={'8'} fontSize={'sm'}>We have built our reputation as true local area experts.</Text>
          </Box>

          {/* Product section */}
          <Stack mt={'8'} align={'flex-start'}>
            <ListHeader>Service</ListHeader>

            <Box textColor={'#CDCDCD'} as="a" href={'#'}>
              About us
            </Box>
            <Box textColor={'#CDCDCD'} as="a" href={'#'}>
              How it Work
            </Box>
          </Stack>

          {/* Company section */}
          <Stack mt={'8'} align={'flex-start'}>
            <ListHeader>Community</ListHeader>
            <Box textColor={'#CDCDCD'} as="a" href={'#'}>
              Call Now
            </Box>
            <Box textColor={'#CDCDCD'} as="a" href={'#'}>
              Enquiry Now
            </Box>
          </Stack>



          {/* Follow Us section */}
          <Stack mt={'8'} align={'flex-start'}>
            <ListHeader>Follow us on</ListHeader>
            <HStack>
              <Box as="a" href={'#'}>
                <Img src={Insta}></Img>

              </Box>
              <Box as="a" href={'#'}>
                <Img src={Youtube}></Img>

              </Box>
              <Box as="a" href={'#'}>
                <Img src={FacBook}></Img>

              </Box>
            </HStack>

          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

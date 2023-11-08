import { Card, Image, Stack, Box, HStack, Heading, Flex, Img, Divider, ButtonGroup, Button, Text, CardBody, CardFooter } from '@chakra-ui/react'
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
function PropertyDetails() {
    const [data, setData] = useState([""]);

    const fetchData = async () => {
        try {
            const response = await Axios.post(`${import.meta.env.VITE_API_URL}projects`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setData(response.data.data); // Assuming the API response contains JSON data
            // console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    return (
        <Box mr={'4'} ml={'4'} >
            <Box p={'4'}>
                <HStack justify={'space-between'}>
                    <Img src={logo}></Img>
                    <Link to={`/`}>
                        <Button mt={'4'} w={'100%'} rounded={'full'} variant={'outline'} borderColor={'#071952'} color='#071952' >
                            Contact us
                        </Button>
                    </Link>
                </HStack>
                <Box>

                <Text  fontSize={['24','43']} fontWeight={'medium'} textColor={'#071952'}>
                    Best recomendation

                </Text >
                <Text w={'50%'} textAlign={['center','start']} textColor={'#73788C'}>
                    Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.
                </Text>
                </Box>
            </Box>

            <Flex m={'4'} flexDir={['column', 'row']} gap={'4'} justify={['center', 'start']} flexWrap={'wrap'}>

                {data.map((item, index) => (
                    <Card key={index} maxW='72'>
                        <CardBody>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack spacing='3' mt={'4'}>
                                <Heading size='md'>{item.name}</Heading>
                                <Text textColor={'#A6A6A6'}>
                                    {item.description}
                                </Text>
                                <HStack justify={'space-between'}>
                                    <Box>
                                        <Text textColor={'#A6A6A6'} fontSize={'12px'}>
                                            Projected IRR
                                        </Text>
                                        <Text fontWeight={'bold'} textColor={'#071952'} fontSize={'17px'}>
                                            {item.projectIRR} %p.a.
                                        </Text>
                                    </Box>
                                    <Box h={'10'} w={'px'} bg={'#DEDCDA'} />
                                    <Box>
                                        <Text textColor={'#A6A6A6'} fontSize={'12px'}>
                                            Min Invest
                                        </Text>
                                        <Text fontWeight={'bold'} textColor={'#071952'} fontSize={'17px'}>
                                            {item.minInvestment}
                                        </Text>
                                    </Box>
                                    <Box h={'10'} w={'1px'} bg={'#DEDCDA'} />

                                    <Box>
                                        <Text textColor={'#A6A6A6'} fontSize={'12px'}>
                                            Tenure
                                        </Text>
                                        <Text fontWeight={'bold'} textColor={'#071952'} fontSize={'17px'}>
                                            {item.tenure}
                                        </Text>
                                    </Box>

                                </HStack>
                                <Flex flexDir={['row', 'row']} justify={'space-between'} >
                                    <Box>
                                        <Text textColor={'#A6A6A6'} fontSize={'12px'}>
                                            Monthly Avg
                                        </Text>
                                        <Text fontWeight={'bold'} textColor={'#071952'} fontSize={'17px'}>
                                            {item.monthlyAvg} %p.a.
                                        </Text>
                                    </Box>
                                    <Box h={'10'} w={'1px'} bg={'#DEDCDA'} />

                                    <Box>
                                        <Text textColor={'#A6A6A6'} fontSize={'12px'}>
                                            Area
                                        </Text>
                                        <Text fontWeight={'bold'} textColor={'#071952'} fontSize={'17px'}>
                                            {item.area} Sq.ft

                                        </Text>
                                    </Box>

                                </Flex>

                            </Stack>
                            <Link to={`/property/${item._id}`}>
                                <Button mt={'4'} w={'100%'} rounded={'full'} variant={'outline'} borderColor={'#071952'} color='#071952' >
                                    View Details
                                </Button>
                            </Link>




                        </CardBody>

                    </Card>

                ))}



            </Flex>
        </Box>

    )
}

export default PropertyDetails
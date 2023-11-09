import React from "react";
import "./property.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import {
  Button,
  Input,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Box,
  Img,
  HStack,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdLocationPin } from "react-icons/md";
import logo from '../../assets/logo.svg'
import a1 from '../../assets/a1.svg'
import a2 from '../../assets/a2.svg'
import a3 from '../../assets/a3.svg'
import a4 from '../../assets/a4.svg'
import a5 from '../../assets/a5.svg'
import a6 from '../../assets/a6.svg'

import { Link } from 'react-router-dom';


import Slider from "react-slick";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import IMG from '../../assets/a.svg'

const Property = () => {
  const { id } = useParams()
  console.log(id)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState([""]);
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateNumber = (number) => {
    const numberRegex = /^\d{10}$/; // Validates 10-digit phone number
    return numberRegex.test(number);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (!validateEmail(inputEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleNumberChange = (e) => {
    const inputNumber = e.target.value;
    setNumber(inputNumber);
    if (!validateNumber(inputNumber)) {
      setNumberError("Invalid phone number");
    } else {
      setNumberError("");
    }
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();

    // Validate form fields before submitting
    if (!validateEmail(email) || !validateNumber(number)) {
      setEmailError("Invalid email address");
      setNumberError("Invalid phone number");
      return;
    }

    // Prepare the form data to be sent to the server
    const formData = {
      name: name,
      email: email,
      phone: number,
    };

    fetch(`${import.meta.env.VITE_API_URL}registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Reset the form values after successful submission
          setName("");
          setEmail("");
          setNumber("");
          setEmailError("");
          setNumberError("");
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(() => {
        toast.success("Form data submitted:");
        // Handle the API response as needed with 'data' variable
      })
      .catch((error) => {
        toast.error("Error submitting form data: " + error.message);
        // Handle errors here
      });
  }
  const fetchData = async () => {
    try {
      const response = await Axios.post(`${import.meta.env.VITE_API_URL}projectById`,
        {
          id: id
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },

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
  console.log(data.name);

  const settings = {
    customPaging: function () {
      return (
        <a className="page--icon--a">
          <Img
            className="page--icon"
            src={IMG} />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box p={'4'}>
        <HStack justify={'space-between'}>
          <Img src={logo}></Img>
          <Text fontSize={'28px'} fontWeight={'medium'} textColor={'#071952'}>
            Our Properties
          </Text>
          <Link to={"/"}>
            <Button mt={'4'} w={'100%'} rounded={'full'} variant={'outline'} borderColor={'#071952'} color='#071952' >
              Contact us
            </Button>
          </Link>
        </HStack>
        <Box>

          <Text fontSize={['24', '43']} fontWeight={'medium'} textColor={'#071952'}>
            Best recomendation

          </Text >
          <Text w={'50%'} textAlign={['center', 'start']} textColor={'#73788C'}>
            Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.
          </Text>
        </Box>
      </Box>

      <div className="property--container max--container">
        <div className="property--left">
          <div className="prop--slider--container">
            <Slider {...settings}>
              <div className="prop-slider-img-cont">
                <img
                  src={IMG}
                />
              </div>
              <div className="prop-slider-img-cont">
                <img
                  src={"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />
              </div>
              <div className="prop-slider-img-cont">
                <img
                  src={"https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                />
              </div>
            </Slider>
          </div>
          {/* ------------ */}
          <div className="prop--content">
            <Box>
              <Box key={data._id} p={4} borderWidth="1px" borderRadius="md" my={2}>


                <div className="prop--header">
                  <h2>
                    {data.name} <span>(Available)</span>
                  </h2>
                  <p className="prop--header--p">
                    {data.description
                    }
                  </p>
                  <div className="prop--location">
                    <Icon
                      as={MdLocationPin}
                      height={"20px"}
                      width={"20px"}
                      color={"#F9A526"}
                      marginRight={4}
                    />
                    <p>Location: {data.location}</p>
                  </div>
                </div>

                <div className="prop--base--info">
                  <div className="prop--info--grid">
                    <p>Projected IRR</p>
                    <p>{data.projectIRR} %p.a.</p>
                  </div>
                  <div className="prop--info--grid">
                    <p>Min Invest</p>
                    <p>₹ {data.minInvestment}</p>
                  </div>
                  <div className="prop--info--grid">
                    <p>Tenure</p>
                    <p>{data.tenure} Year</p>
                  </div>
                  <div className="prop--info--grid">
                    <p>Monthly Avg</p>
                    <p>{data.monthlyAvg} %p.a.</p>
                  </div>
                  <div className="prop--info--grid">
                    <p>Area</p>
                    <p>{data.area} Sq.ft</p>
                  </div>
                </div>
              </Box>



            </Box>
            <div className="prop--tabs">
              <ul>
                <li>
                  <Link href="#overview">Overview</Link>
                </li>
                <li>
                  <Link href="#keyarea">Distance To Key Areas</Link>
                </li>
                <li>
                  <Link href="#Amenities">Product Details</Link>
                </li>
                <li>
                  <Link href="#location">Location</Link>
                </li>
                <li>
                  <Link href="#faq">FAQ</Link>
                </li>
              </ul>
            </div>

            <Box p={4} borderWidth="1px" borderRadius="md" my={2}>


              <div className="prop--overview prop--tab--secs" id="overview">
                <h2>Overview</h2>
                <Box ml={'2'} className="prop--overview--content prop--tab--secs--content">
                  <ul>
                    {
                      data.overview && data.overview.map((item, index) => (
                        <li key={index}>
                          {item}
                        </li>
                      ))
                    }

                  </ul>
                </Box>
              </div>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md" my={2}>

              <div className="prop--keyarea prop--tab--secs" id="keyarea">
                <h2>Distance To Key Areas</h2>
                <div className="prop--keyarea--content prop--tab--secs--content">
                  <ul>
                    {
                      data.distance && data.distance.map((item, index) => (
                        <ul key={index}>
                          {console.log(item)}
                          {item}
                        </ul>
                      ))
                    }

                  </ul>
                </div>
              </div>
            </Box>

            <div className="prop--aminities prop--tab--secs" id="Amenities">
              <h2>Amenities</h2>
              <div className="prop--aminities--content">
                <div className="aminities--case">
                  <img
                  src={a1}
                    alt=""
                  />
                  <p>Club House</p>
                </div>

                <div className="aminities--case">
                  <img
                  src={a2}
                  alt=""
                  />
                  <p>Cafeteria</p>
                </div>

                <div className="aminities--case">
                  <img
                  src={a3}
                  alt=""
                  />
                  <p>Hospital</p>
                </div>

                <div className="aminities--case">
                  <img
                  src={a4}
                  alt=""
                  />
                  <p>Jogging Tracks</p>
                </div>

                <div className="aminities--case">
                  <img
                  src={a5}
                  alt=""
                  />
                  <p>Multi-Purpose Hall</p>
                </div>

                <div className="aminities--case">
                  <img
                  src={a6}
                  alt=""
                  />
                  <p>Meditation Area</p>
                </div>
              </div>
            </div>

            <div className=" prop--tab--secs" id="location">
              <h2>Location</h2>
              <Box p={4} borderWidth="1px" borderRadius="md" my={2}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.338891059734!2d75.9143975742761!3d22.75280132634362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa84286eb91cf5c45%3A0xd5d1e812a21d58a1!2sNext%20Gen%20Tech%20Services!5e0!3m2!1sen!2sin!4v1698844440205!5m2!1sen!2sin"
                  width="100%" // Adjust the width as needed
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </div>

            <div className="prop--faq prop--tab--secs" id="faq">
              <h2>Frequently ASK Quetions</h2>
              <div className="prop--faq--content">

                <Accordion allowMultiple width="100%" rounded="lg">
                  {
                    data.faq && data.faq.map((item, index) => (
                      // {item.question}


                      <AccordionItem key={index}>
                        <AccordionButton
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          p={4}
                        >
                          <Text fontSize="md">{item.question}</Text>
                          <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Text color="gray.600">
                            {item.answer}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    ))
                  }


                </Accordion>
              </div>
            </div>
          </div>







        </div>
        <div className="property--right">
          <form onSubmit={FormSubmitHandler} className="property--form">
            <h2>
              Book Your Free <br /> <span>Consultation</span>
            </h2>
            <div className="form--main">
              <Input
                focusBorderColor={"#F9A526"}
                variant="filled"
                placeholder="Enter your name"
                backgroundColor={"#e5e5e5"}
                color={"#737373"}
                size={"lg"}
                height={"55px"}
                onChange={(e) => setName(e.target.value)}
                value={name} // Add the 'value' prop to bind the input value to the 'name' state
              />
              <div>

                <Input
                  focusBorderColor={"#F9A526"}
                  variant="filled"
                  placeholder="Enter your email"
                  backgroundColor={"#e5e5e5"}
                  color={"#737373"}
                  size={"lg"}
                  height={"55px"}
                  onChange={handleEmailChange}
                  value={email} // Bind input value to the 'email' state
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              </div>
              <div>

                <Input
                  focusBorderColor={"#F9A526"}
                  variant="filled"
                  placeholder="Enter your Phone number"
                  backgroundColor={"#e5e5e5"}
                  color={"#737373"}
                  size={"lg"}
                  height={"55px"}
                  onChange={handleNumberChange}
                  value={number} // Bind input value to the 'number' state
                />
                {numberError && <p style={{ color: "red" }}>{numberError}</p>}
              </div>
              <Button
                colorScheme="orange"
                backgroundColor="#F9A526"
                size={"lg"}
                marginTop={4}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Property;

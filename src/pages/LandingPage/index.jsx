import Logo from "../../assets/logo.png";
import "../../../node_modules/video-react/dist/video-react.css";
import "./landing.css";

import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  Text,
  Avatar,
  Flex,
  Box,
  Image,
  Img,
  Heading,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import Focus from "../../assets/focus-img.png";
import About from "../../assets/about.png";
import { Player, BigPlayButton } from "video-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Rectangle1 from '../../assets/Property1.svg'
import Rectangle28 from '../../assets/Rectangle28.svg'
import Rectangle26 from '../../assets/Rectangle26.svg'
import Rectangle14 from '../../assets/Rectangle14.svg'
import Rectangle15 from '../../assets/Rectangle15.svg'
import Rectangle16 from '../../assets/Rectangle16.svg'
import Step from '../../assets/Step.svg'
import { useEffect } from "react";
// import Rectangle1 from '../../assets/Rectangle1.svg'

const LandingPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
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
  return (
    <div className="landing--container">
      <section className="hero--section">
        <div className="hero--content max--container">
          <div className="hero--left">
            <div className="hero--logo">
              <img src={Logo} alt="" />
            </div>
            <div className=" hero--left--lower">
              <h2>Smart to invest in real estate</h2>
              <p>
                Our international brand specializes in property <br />{" "}
                appraisal, sales, purchases, and investments.
              </p>
              <br />
              <Link to={"/propertydetails"}>
                <Button
                  colorScheme="orange"
                  backgroundColor="#F9A526"
                  size={"lg"}
                >
                  Explore Our Projects
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero--right">
            <form onSubmit={FormSubmitHandler} className="hero--form">
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
                  value={name}
                  required
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
                    value={email}
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
                    value={number}
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
      </section>
      <Box mb={'-24'} mt={'20'}>

        <Image w={'100%'} src={Step}></Image>

      </Box>

      <section className="facility--section">
        <div className="facility--content max--container">

          <div className="facility--left">

            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
              <BigPlayButton position="center" />
            </Player>
          </div>

          <div className="facility--right">

            <span>Our facilities</span>
            <h2>HELPING YOU FIND THE PROPERTY OF YOUR DREAMS</h2>
            <p>
              Agent hen an unknown printer took a galley of type and scramble d
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic.
            </p>
            <div className="facility--list">
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Box mt={'-10'}>

        <section className="about--section">
          <div className="about--content max--container">
            <div className="about--left">
              <h2>About Us</h2>
              <img src={About} alt="" />
            </div>
            <div className="about--right">
              <h2 className="a--h2">
                HELPING YOU FIND THE PROPERTY OF YOUR DREAMS
              </h2>
              <p>
                We are a trusted professional in Indore with decades of experience
                in the property market. We deal in all kinds of properties
                including commercial, affordable housing, luxury, rental, etc. We
                are also covering all types of property documentation and legal
                work on behalf of our clients.
              </p>
              <div className="about--numbers">
                <div className="number--cont">
                  <h2>
                    10 <span>+</span>
                  </h2>
                  <p>Awards Gained</p>
                </div>
                <div className="number--cont">
                  <h2>
                    20 <span>+</span>
                  </h2>
                  <p>Years of Experience</p>
                </div>
                <div className="number--cont">
                  <h2>
                    567 <span>+</span>
                  </h2>
                  <p>Rented Home Stay</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
      <Box mt={'-10'}>

        <section className="customer--section">
          <div className="customer--content max--container">
            <div className="customer--head">
              <h2>
                What Our Customers Say <br /> About Us
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Duis sit amet ante justo. Nulla quis semper ex, eu fringilla urna.
              </p>
            </div>

            <div className="customer--cards">
              <Card maxW="md" borderRadius={"10px"}>
                <CardHeader>
                  <Flex spacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />

                      <Box>
                        <Heading size="sm">Segun Adebayo</Heading>
                        <Text>Creator, Chakra UI</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    With Chakra UI, I wanted to sync the speed of development with
                    the speed of design. I wanted the developer to be just as
                    excited as the designer to create a screen.
                  </Text>
                </CardBody>
              </Card>

              <Card maxW="md" borderRadius={"10px"}>
                <CardHeader>
                  <Flex spacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />

                      <Box>
                        <Heading size="sm">Segun Adebayo</Heading>
                        <Text>Creator, Chakra UI</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    With Chakra UI, I wanted to sync the speed of development with
                    the speed of design. I wanted the developer to be just as
                    excited as the designer to create a screen.
                  </Text>
                </CardBody>
              </Card>

              <Card maxW="md" borderRadius={"10px"}>
                <CardHeader>
                  <Flex spacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />

                      <Box>
                        <Heading size="sm">Segun Adebayo</Heading>
                        <Text>Creator, Chakra UI</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    With Chakra UI, I wanted to sync the speed of development with
                    the speed of design. I wanted the developer to be just as
                    excited as the designer to create a screen.
                  </Text>
                </CardBody>
              </Card>

              <Card maxW="md" borderRadius={"10px"}>
                <CardHeader>
                  <Flex spacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />

                      <Box>
                        <Heading size="sm">Segun Adebayo</Heading>
                        <Text>Creator, Chakra UI</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    With Chakra UI, I wanted to sync the speed of development with
                    the speed of design. I wanted the developer to be just as
                    excited as the designer to create a screen.
                  </Text>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

      </Box>

      <Box mt={'4'}>
        {/* 
        <section className="gallery max--container">
          <figure className="item-1">
            <Img
              className="gallery--img"
              src={Rectangle28}
              alt=""
            />
          </figure>
          <figure className="item-2">
            <img
              className="gallery--img"
              src={Rectangle1}
              alt=""
            />
          </figure>
          <figure className="item-3">
            <img
              className="gallery--img"
              src={Rectangle26}
              alt=""
            />
          </figure>
          <figure className="item-4">
            <img
              className="gallery--img"
              src={Rectangle14}
              alt=""
            />
          </figure>
          <figure className="item-5">
            <img
              className="gallery--img"
              src={Rectangle15}
              alt=""
            />
          </figure>
          <figure className="item-6">
            <img
              className="gallery--img"
              src={Rectangle16}
              alt=""
            />
          </figure>
        </section> */}
        <Box m={'auto'} w={'85%'} display={'flex'}  flexDir={'row'}>
          <Box>
            <Image minW={'80%'} maxW={'100%'} src={Rectangle28} />
            <Flex >

              <Image minW={'50%'} maxW={'10%'} src={Rectangle1} />
              <Image minW={'50%'} maxW={'10%'} src={Rectangle26} />
            </Flex>

          </Box>
          <Box>
            <Image minW={'80%'} h={'100%'} maxW={'100%'} src={Rectangle14} />
          </Box>
          <Box >
            <Image minW={'80%'} maxW={'100%'} src={Rectangle15} />
            <Image  minW={'80%'} maxW={'100%'} src={Rectangle16} />
          </Box>
        </Box>
      </Box>
      <Box mt={'4'}>

        <section className="map max--container">
          <div className="map--left">
            <form onSubmit={FormSubmitHandler}>
              <h2>
                Book Your Free <br /> <span>Consultation</span>
              </h2>
              <Input
                focusBorderColor={"#F9A526"}
                variant="filled"
                placeholder="Enter your name"
                backgroundColor={"#263666"}
                color={"#fff"}
                size={"lg"}
                height={"55px"}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <div>

                <Input
                  focusBorderColor={"#F9A526"}
                  variant="filled"
                  placeholder="Enter your email"
                  backgroundColor={"#263666"}
                  color={"#fff"}
                  size={"lg"}
                  height={"55px"}
                  onChange={handleEmailChange}
                  value={email}
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              </div>
              <div>

                <Input
                  focusBorderColor={"#F9A526"}
                  variant="filled"
                  placeholder="Enter your Phone number"
                  backgroundColor={"#263666"}
                  color={"#fff"}
                  size={"lg"}
                  height={"55px"}
                  onChange={handleNumberChange}
                  value={number}


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
            </form>
          </div>
          <div className="map--right">
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
        </section>
      </Box>

    </div>
  );
};

export default LandingPage;


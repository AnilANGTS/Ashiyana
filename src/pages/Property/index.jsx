import React from "react";
import "./property.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import {
  Button,
  Input,
  Icon,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdLocationPin } from "react-icons/md";

import Slider from "react-slick";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

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

    fetch("https://efd3-202-43-120-216.ngrok-free.app/api/v1/registration", {
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
      const response = await Axios.post(
        `${ import.meta.env.VITE_API_URL}projectsById`,
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
    customPaging: function (i) {
      return (
        <a className="page--icon--a">
          <img
            className="page--icon"
            src={`https://s3-alpha-sig.figma.com/img/e34b/6456/cfaa9c81d600207c986211e8f8e1288a?Expires=1699228800&Signature=bCTz9e~sw8c6ylkEPvKPN14MvbSSYV1UNjOpxrmpvMTkuZp5xuM73GZv3XaCbJAOSjMlOfnAeHwISGCFGt06X3mOsUDTsGBM~k9gyDuRbypxqg3-EhZ~frbPVddHKEfNZbwvWrVj2dMe90tKi-COVrKNGV-IlLhxEo5oIpP~Yj2AwdZXJNXRXgBslP2K0VhRSj23lKcSucyJ4uefRPbQXNXSFLzPxBuUzpV60Bkv-wpXcJ4gdx74XCizOisQ8cOJFp5lGb4iMTepuNplOHsO0XwLowdsawW9u1GViL1Dd4vYBWccpdoP8z882kF6Dq7y8O4Pdt7swwOkyEhM9IK4Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
          />
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


      <div className="property--container max--container">
        <div className="property--left">
          <div className="prop--slider--container">
            <Slider {...settings}>
              <div className="prop-slider-img-cont">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/4340/2115/359df0f6fd5f74a326791950f6355706?Expires=1699228800&Signature=h1TJbVeO-ReV3l~jIN8FrYz0TYfvW2SfBkjgbJYa-xAJHTx41rfM4DESX-4q10IyNWfLfZv50HQQa8RqNvH61zDMo0QEwi93qxRBH1m0wBmPg8V1IIy1VfGRx8RVVZ2POKQYfYLVByrGIWfDR0hmxp~~QikmeZHAHQywsDBU4O~WEQ-~kvi9ZBjxlZv3-AgrPChelesC2debcaFm0VvcImB06~GQihNQHOmQk5-8SlfaQ23HvGmXTpS5BlBQL8rHROMYD30LtNbvUNfuik-ju~T4eUrAqxCFP7eV14eblpauZTKwP0eCO3Tx-R65wUktfODa3JS4MUEL7CeZrdEQVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
                />
              </div>
              <div className="prop-slider-img-cont">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/e34b/6456/cfaa9c81d600207c986211e8f8e1288a?Expires=1699228800&Signature=bCTz9e~sw8c6ylkEPvKPN14MvbSSYV1UNjOpxrmpvMTkuZp5xuM73GZv3XaCbJAOSjMlOfnAeHwISGCFGt06X3mOsUDTsGBM~k9gyDuRbypxqg3-EhZ~frbPVddHKEfNZbwvWrVj2dMe90tKi-COVrKNGV-IlLhxEo5oIpP~Yj2AwdZXJNXRXgBslP2K0VhRSj23lKcSucyJ4uefRPbQXNXSFLzPxBuUzpV60Bkv-wpXcJ4gdx74XCizOisQ8cOJFp5lGb4iMTepuNplOHsO0XwLowdsawW9u1GViL1Dd4vYBWccpdoP8z882kF6Dq7y8O4Pdt7swwOkyEhM9IK4Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
                />
              </div>
              <div className="prop-slider-img-cont">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/e34b/6456/cfaa9c81d600207c986211e8f8e1288a?Expires=1699228800&Signature=bCTz9e~sw8c6ylkEPvKPN14MvbSSYV1UNjOpxrmpvMTkuZp5xuM73GZv3XaCbJAOSjMlOfnAeHwISGCFGt06X3mOsUDTsGBM~k9gyDuRbypxqg3-EhZ~frbPVddHKEfNZbwvWrVj2dMe90tKi-COVrKNGV-IlLhxEo5oIpP~Yj2AwdZXJNXRXgBslP2K0VhRSj23lKcSucyJ4uefRPbQXNXSFLzPxBuUzpV60Bkv-wpXcJ4gdx74XCizOisQ8cOJFp5lGb4iMTepuNplOHsO0XwLowdsawW9u1GViL1Dd4vYBWccpdoP8z882kF6Dq7y8O4Pdt7swwOkyEhM9IK4Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
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

            <Box  p={4} borderWidth="1px" borderRadius="md" my={2}>


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
            <Box  p={4} borderWidth="1px" borderRadius="md" my={2}>

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
                    src="https://s3-alpha-sig.figma.com/img/31da/373e/d8b0190bfdf5f3590d1076a33426799f?Expires=1699228800&Signature=d6WnLbZHKyotTF56W2yX8efOEdCsZRNfd4M3YimPqkxbY8uzQDhjADC64tk4EtP~8KOQI3fGfBlAe-wCAo9bqoKmS5UNR61qh1IFSMcawRFRo0Qj~Yk4bRTy51G6b2T5yG5ahYIfvZAfKIPgrjxS~nKMiM0i24KPMNQbKQAaTvTn64IflqS~H1nUIPXKvdXUww3tD-p0uUq6nb9J~dMsMr4r64pqq7R7rMdzdHVdNU1o2vuwWG9H3zL6SlbncfqriStkBibAaT4DIyZi79NlGv8lvt5~NdEeHqrlkFTb0yIWnjzwXplW5sZ7kiRxcY33FtAlg0SQW84OPAGRyTyOzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                  <p>Club House</p>
                </div>

                <div className="aminities--case">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/cd3d/3c58/98ccf688a277f0eba2ce78572e2bdbdd?Expires=1699228800&Signature=LuN13SDZ35ok1b-Tj9QMZdDSlvbhs6n~nKIUZac8JxZVLI2bWH9GStUPxV1GxxiWi4loQ0fIC6wUE4fDtiZNJTDtlHRDLFWr1j3aJvgph6pg7XTjNxGsyGH5FPKOE3oZw7VN0OFKq-yvAZPM5vGrMZJKXe1gGIldEiyAhrqDyNFpBLW0MnItY2ZiLaF6QcKairgdkySP3PTPdO-HN61~EMgm-V7kix3bijAb-VUAqR~eV-sGAfs18DEJHZOuvt5D7djVREl5gGDWa4gEZx1n2pvqp~cJZQziFfQm9SoEVlN3l5l2HscNyGYJy4BVoa-FhHC8p4fH1c-lk7oDaOCdJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                  <p>Cafeteria</p>
                </div>

                <div className="aminities--case">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/8320/e538/6169332fb4868aec77a5439afe2411c2?Expires=1699228800&Signature=Qc2OaekAIXP3u5-Kb45hS1308yqARUnKAyHSViiMQZQIHL3O5X6wT9G-ihJrfj6f4RgskgoBGwcVanWOV9-KKnW6mlIVgsc5e160pZUgGso98dEaIDUFpaWTGX04dYhQCl7YLOj86BiQ8z7b~bO8wp9wsdXMc5BKsDOyj~nQsoWCFNdy6ACODpnHDgAFJ55t1N0CIUlMZB3i4z20bSR040oPXD3B-JfictYSVTFhJAxVp9E9nxz4BnxSJ-6WqY87FBOU9N30AXvOrfUUtWcPxk-XYWQCUmc2cd4~fpJXmIvBW~4bQy9UT~boYAiIdUZRMvPJFUtq-Ng6dj3x0wj8nA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                  <p>Hospital</p>
                </div>

                <div className="aminities--case">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/e00e/f21c/a4a6b129fedd97d3a14cf1323efcd729?Expires=1699228800&Signature=nXt5TJfuA8Hhpj9O0-1euqT8g-7FkwU4J1Xf4xJbcOVY~lXtuKDNlqUvCszWzu-My1-QmeWO9A9K~TWzkWRpLpK4ZDtfjwRtpR1OGiMecTPhlcHBNRgPfIGDCG6aogp52-gNmhfVecfTiVPJoY8MutfrBIYVp8AHXep3BLpTcInQbrurK2Dyp8jCwjbtFmEqfoxAWGKawTbZE9bUfYRSFrFsd7n83LnTB21n6YNHEiNRregMDHSl0MXWmxH4NdvEY5EBwb5GNIXli~wsHqCJ11TpNolWJhg26EXzkAeqONqQTvZ-jk0cmBMoPv5fFIS7YUxMmZcYHxzLKgqUc9Ni0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                  <p>Jogging Tracks</p>
                </div>

                <div className="aminities--case">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/51db/42f7/91cb4678d166d11a78f4a64babadbf39?Expires=1699228800&Signature=EHeJ-tpwJCJmQX1AEHGpAp7P5Y0G53All1TC1fsNKEvIoQJqUtXmFnOxw1qh5cCuNyI3lo0jx4y2spqeEdRhU~R1FrftFQR~eBwO~7jVDeDrwzLvPqCWDwkrbq931NN-gBEsTPJ5ZL7DKZHHksLqzaXrALEJocSq17AhVpODfZEEkhfrZCYvacYEYLKGbrFKgiP1IB0fRDmfIII9XrAdPPXnTwhYj88ii4eWEGT1-CDH7QipjJ0ni7ggYVO3K77aLT6w8sGxgla6fTO4ddBaHRbYrMkXBqrXjrn60LkXWvsAXe5dOPHqziBihnJWrZOgrZ9sBcY9ES0X-2FgcVusOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                  <p>Multi-Purpose Hall</p>
                </div>

                <div className="aminities--case">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/00ba/b3a1/4ebeaa70126100a6a49344cd895c44b1?Expires=1699228800&Signature=MHMWaU24t~2HlzofoZz14S7tvpRbTu-6RUm4RwS2BscDezEIWFvfNhKb35eW3bS733HBptYM~pnzp0OaV3QOljVvYtKNaYdBo5v5whFodVE7gIZeoGVhB2mQV5Mxl8kd008b~11DiIoTqQvnHoqvXc6td4keiLbJgXzlpGN4EHtgBsBARoU1VTYImA5rje3~m31CdFvUFhc7pc6Ditk8KDQdmPwFgSsFpJ7wRANRghOyMLDOw-n1mx8uX0hjUIf82eLtooSX5Kaqpn9fygGrpNXiFkk3W4fS8UUuH0SaREiskpD9UxXhjiZXuR9y8zyHlKuq0NbtZDVh3y7bn6Imuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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

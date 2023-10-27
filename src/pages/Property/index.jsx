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
  Container,
} from "@chakra-ui/react";

import {ChevronDownIcon} from "@chakra-ui/icons"
import { MdLocationPin } from "react-icons/md";

import Slider from "react-slick";

const Property = () => {
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
          <div className="prop--header">
            <h2>
              Perum griya asri <span>(Available)</span>
            </h2>
            <p className="prop--header--p">
              Earn Stable Monthly Rental Income backed by hard ownership of the
              asset.
            </p>
            <div className="prop--location">
              <Icon
                as={MdLocationPin}
                height={"20px"}
                width={"20px"}
                color={"#F9A526"}
                marginRight={4}
              />
              <p>Location: Bogor, Jawa Barat</p>
            </div>
          </div>

          <div className="prop--base--info">
            <div className="prop--info--grid">
              <p>Projected IRR</p>
              <p>17.08%p.a.</p>
            </div>
            <div className="prop--info--grid">
              <p>Min Invest</p>
              <p>25 Lakh</p>
            </div>
            <div className="prop--info--grid">
              <p>Tenure</p>
              <p>3 Years</p>
            </div>
            <div className="prop--info--grid">
              <p>Monthly Avg</p>
              <p>17.08%p.a.</p>
            </div>
            <div className="prop--info--grid">
              <p>Area</p>
              <p>15,000 Sq.ft</p>
            </div>
          </div>

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

          <div className="prop--overview prop--tab--secs" id="overview">
            <h2>Overview</h2>
            <div className="prop--overview--content prop--tab--secs--content">
              <ul>
                <li>
                  MG Road is widely recognized as the central hub of the city,
                  characterized by a continuous bustle, being part of the
                  Central Business District (CBD) of Bangalore.
                </li>
                <li>
                  The area is also a developed upmarket residential & commercial
                  locality with seamless road, bus & metro connectivity.
                </li>
                <li>
                  The property is in close proximity to the Trinity and MG Road
                  metro stations.
                </li>
                <li>
                  Proximity to upscale malls like Sobha City Mall, Garuda Mall,
                  UB City, Cauvery Emporium and 1 MG Mall.
                </li>
              </ul>
            </div>
          </div>

          <div className="prop--keyarea prop--tab--secs" id="keyarea">
            <h2>Distance To Key Areas</h2>
            <div className="prop--keyarea--content prop--tab--secs--content">
              <ul>
                <li>Trinity Metro Station 100m</li>
                <li>MG Road Metro Station 2km</li>
                <li>Sobha City Mall 2km</li>
              </ul>
            </div>
          </div>

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
            <div className="prop--location--content">
              <img
                src="https://s3-alpha-sig.figma.com/img/26ec/ec4d/f24d9e13ded0c0cd3b2826ccf70c77fd?Expires=1699228800&Signature=NCttYyosAA~YdP-g5IR8rNRMkAkxWKzp63LS3CnWZ4EDMSlwlkwnyFU~Yw0OCtZLFqtCBdFcjkhFLK4fWyXCod7Zd4Tn9NcQgoYI8SmXSSJ9RjcxSlMnSXJWY1QLHgrsy8k5BRo1SA5zFBCZh9OxB7DYKmRVub~4OjvsCSCwZ7EUEvPy5sWbkEoPLGN0oSuFv-RoCCMrf5mWaqS176Qaa~xqd~bnCMfSjYMX7Uxn8qbsXUPbJ9m3WIcjI6iI1hrxpxyhDLjS5a1qiBA~Zo6t73GT1P7mpcpSoeM0gpHG66FqW-w1kWCOJv~j1LKyuxsViHPj6up0LtBxkK6OItIMAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>

          <div className="prop--faq prop--tab--secs" id="faq">
            <h2>Frequently ASK Quetions</h2>
            <div className="prop--faq--content">
              <Accordion allowMultiple width="100%"  rounded="lg">
                <AccordionItem>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Text fontSize="md">What is Chakra UI?</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="gray.600">
                      Chakra UI is a simple and modular component library that
                      gives developers the building blocks they need to create
                      web applications.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Text fontSize="md">What advantages to use?</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="gray.600">
                      Chakra UI offers a variety of advantages including ease of
                      use, accessibility, and customization options. It also
                      provides a comprehensive set of UI components and is fully
                      compatible with React.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Text fontSize="md">How to start using Chakra UI?</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="gray.600">
                      To get started with Chakra UI, you can install it via npm
                      or yarn, and then import the components you need in your
                      project. The Chakra UI documentation is also a great
                      resource for getting started and learning more about the
                      library.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="property--right">
        <form className="property--form">
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
            />
            <Input
              focusBorderColor={"#F9A526"}
              variant="filled"
              placeholder="Enter your email"
              backgroundColor={"#e5e5e5"}
              color={"#737373"}
              size={"lg"}
              height={"55px"}
            />
            <Input
              focusBorderColor={"#F9A526"}
              variant="filled"
              placeholder="Enter your Phone number"
              backgroundColor={"#e5e5e5"}
              color={"#737373"}
              size={"lg"}
              height={"55px"}
            />
            <Button
              colorScheme="orange"
              backgroundColor="#F9A526"
              size={"lg"}
              marginTop={4}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Property;

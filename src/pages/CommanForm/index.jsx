import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import toast from 'react-hot-toast';
import "../Property/property.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function CommanForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const FormSubmitHandler = (e) => {
        e.preventDefault();

        // Prepare the form data to be sent to the server
        const formData = {
            name: name,
            email: email,
            phone: number,
        };

        // Make a POST request to your API endpoint using fetch
        // fetch(`${import.meta.env.REACT_APP_API_ENDPOINT_URL}/registration`, {
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

                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((data) => {
                toast.success("Form data submitted:");
                // Handle the API response as needed with 'data' variable
            })
            .catch((error) => {
                toast.error("Error submitting form data: " + error.message);
                // Handle errors here
            });
    };

    

    return (
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
                    <Input
                        focusBorderColor={"#F9A526"}
                        variant="filled"
                        placeholder="Enter your email"
                        backgroundColor={"#e5e5e5"}
                        color={"#737373"}
                        size={"lg"}
                        height={"55px"}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} // Bind input value to the 'email' state
                    />
                    <Input
                        focusBorderColor={"#F9A526"}
                        variant="filled"
                        placeholder="Enter your Phone number"
                        backgroundColor={"#e5e5e5"}
                        color={"#737373"}
                        size={"lg"}
                        height={"55px"}
                        onChange={(e) => setNumber(e.target.value)}
                        value={number} // Bind input value to the 'number' state
                    />
                    <Button
                        colorScheme="orange"
                        backgroundColor="#F9A526"
                        size={"lg"}
                        marginTop={4}
                        type='submit'
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default CommanForm;

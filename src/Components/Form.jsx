import "../App.css";
import { useState } from "react";


function Form() {
    //Initialize the component state using the useState hook. formData is an object that holds the form data, and setFormData is a function used to update the state.
    const [textValue, setTextValue] = useState('');
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    //Define a function handleChange that updates the form data when input values change. It uses the spread operator (...) to create a copy of the previous state and update the specific field (name or email) based on the input element's name attribute.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    //Define a function handleSubmit that prevents the default form submission behavior and logs the form data to the console. In a real-world scenario, you would typically send this data to a server or perform further actions.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, textValue, "Form submitted")
    }

    //Render a form with three input fields (for first name, last name, and email) and a submit button. Each input field is associated with its corresponding handleChange function, and the form is associated with the handleSubmit function on submission.
    return (
        <div className="formContainer">
            <h1>Thank you for choosing T.A.P. Services</h1>
            <h2>Please fill out the information below: </h2>
            <form onSubmit={handleSubmit}>
                <div className="inputWrapper">
                    <label className="textLabel">First Name:</label>
                    <input className="inputField"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="inputWrapper">
                    <label className="textLabel">Last Name:</label>
                    <input className="inputField"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="inputWrapper">
                    <label className="textLabel">Email:</label>
                    <input className="inputField"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <br />
                <div className="inputWrapper">
                    <label className="textLabel">Have I worked for you in the past? (yes or no): </label><br />
                    <select className="inputField">
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                </div>
                <br />
                <div  className="checkBoxWrapper">
                    <label className="textLabel">Please choose the service(s) you need: </label><br />                   
                    <input type="checkbox" id="service1" name="vehicle1" value="Admin" />
                    <label className="checkLabel" for="vehicle1">Administrative Professional Services</label><br />
                    <input type="checkbox" id="service2" name="vehicle2" value="Graphic" />
                    <label className="checkLabel" for="vehicle2">Graphic Design Services</label><br />
                    <input type="checkbox" id="service3" name="vehicle3" value="Software" />
                    <label className="checkLabel" for="vehicle3">Software Developer Services</label><br />
                </div>
                <div className="inputWrapper">
                    <br />
                    <label className="textLabel">Please describe the service(s) you need:</label>

                    <br />
                    <textarea className="textInput" value={textValue} onChange={handleTextChange} />

                </div>
                <br />
                <div className="buttonSubmit">
                    <button className="buttonSubmit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

//Export the Form component to make it available for use in other parts of your application.
export default Form;
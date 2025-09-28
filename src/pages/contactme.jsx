/// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 28th, 2025 -->
// Contact Me page. Allows the user to send me a message. Currently only captures the information and saves it.
// Imports necessary plugins.
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactMe() {
    // Creates variables to store information and change current page.
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const navigate = useNavigate();

    // If the text has changed, updates it to the new text.
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // If the text is submitted, it ensure it prevents default info and writes the text into the console log and stores it, then navigates to the homepage.
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted: ", formData);
        navigate("/");
    };

    return (
        <div>
            <div className="pages-div">
                <div className="pages-text">
                    <h1>Contact Me</h1>
                    <p>If you're wanting to contact me, please fill out the form below!</p>
                </div>
            </div>
            
            <div className="pages-div">
                <div className="pages-text">
                    <form className="contactme-form" onSubmit={handleSubmit}>
                        <input placeholder="Your Name" name="name" required value={formData.name} onChange={handleChange}/>
                        <input type="email" placeholder="Your Email" name="email" required value={formData.email} onChange={handleChange}/>
                        <textarea placeholder="Your Message" name="message" required value={formData.message} onChange={handleChange}/>
                        <button className="contactme-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
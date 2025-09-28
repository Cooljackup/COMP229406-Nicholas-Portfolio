/// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 28th, 2025 -->
// Contact Me page. Allows the user to send me a message. Currently only captures the information and saves it.
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactMe() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted: ", formData);
        navigate("/");
    };

    return (
        <div>
            <div class="pages-div">
                <div class="pages-text">
                    <h1>Contact Me</h1>
                    <p>If you're wanting to contact me, please fill out the form below!</p>
                </div>
            </div>
            
            <div class="pages-div">
                <div class="pages-text">
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
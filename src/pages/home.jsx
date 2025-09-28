/// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 28th, 2025 -->
// Home page. Displays a background, a picture, and some buttons to other parts of the website.
// Imports necessary plugins and image.
import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpg";

export default function Home() {
  return (
    <div className="home-div">
      <div className="box">
        <img src={pfp}/>
        <h1>Nicholas' Portfolio</h1>
        <p>Hello! My name is <strong>Nicholas Bonneville</strong>. I am currently a student enrolled in Software Engineering Technology here at Centennial College.</p>
        
        <div className="home-buttons">
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}
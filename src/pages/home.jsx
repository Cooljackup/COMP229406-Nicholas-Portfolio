// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 24th, 2025 -->
import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpg";

export default function Home() {
  return (
    <div class="home-div">
        <img src={pfp}/>
        <h1>Nicholas' Portfolio</h1>
        <p>Hello! My name is <strong>Nicholas Bonneville</strong>. I am currently a student enrolled in Software Engineering Technology here at Centennial College.</p>
        
        <div>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">View Projects</Link>
        </div>
    </div>
  );
}
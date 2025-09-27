// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 24th, 2025 -->
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import AboutMe from "./pages/aboutme.jsx";
import Projects from "./pages/projects.jsx";
import Services from "./pages/services.jsx";
import ContactMe from "./pages/contactme.jsx";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutme">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contactme">Contact Me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactme" element={<ContactMe/>} />
      </Routes>
    </div>
  );
}
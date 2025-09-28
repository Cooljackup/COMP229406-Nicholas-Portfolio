/// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 28th, 2025 -->
// About Me page. Contains information about me, and allows the user to download my resume.
// Imports images.
import pfp from "../assets/pfp.jpg";
import resume from "../assets/resume.pdf";

export default function AboutMe() {
  return (
    <div>
      <div className="pages-div">
        <div className="pages-content">
          <img src={pfp} className="aboutme-photo"/>
          <div className="pages-text">
            <h1>About Me</h1>
            <p>Hello! My name is <strong>Nicholas Bonneville</strong>. I am currently a student enrolled in Software Engineering Technology here at Centennial College.</p>
            <p>When it comes to programming, I call myself a jack of all trades, but master at none of them. I program in various languages.</p>
            <p>I also have a very unhealthy obsession with all things related to Spyro the Dragon.</p>
          </div>
        </div>
      </div>

      <div className="pages-div">
        <div className="pages-text">
          <p>You can find more out about me by downloading my resume below:</p>
          <div className="aboutme-resume">
            <p>📄 <a href={resume} download>My Resume (resume.pdf)</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
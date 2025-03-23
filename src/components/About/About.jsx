import React from "react";
import "./About.scss";

const About = () => (
  <section id="about" className="about section">
    <div className="container section-title" data-aos="fade-up">
      <h2>About</h2>
      <p className="justify">
      Final-year Computer Engineering student with experience in developing real-time chat applications and education management systems using PHP Laravel and Fullstack technologies. Skilled in database management, user authentication, and front-end integration. Seeking a software development role to leverage technical skills and innovation in a dynamic environment.
      </p>
    </div>
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4 text-center">
          <img
            src=""
            className="img-fluid"
            style={{
              maxWidth: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="Profile"
          />
        </div>
        <div className="col-lg-8 content">
          <h2>Software Engineer</h2>
          <p className="py-3 justify">
            Being a Software Engineer means turning abstract ideas into
            tangible, working solutions. I find immense satisfaction in crafting
            the bridge between creativity and technology.
          </p>
          <div className="row">
            {[
              { label: "Degree", value: "Bachelor of Technology" },
              { label: "Email", value: "Jaypatel91202@gmail.com" },
              { label: "Address", value: "vadodara,Gujarat, India" },
            ].map((item, index) => (
              <div className="col-lg-6" key={index}>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{item.label}:</strong> <span>{item.value}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <p className="py-3 justify">
            My dedication to programming is not just about writing code; it's
            about understanding the intricate details that make technology work.
            Whether it's exploring new languages, diving into innovative
            projects, or tackling difficult bugs, I am always eager to learn and
            grow in the ever-evolving landscape of software development.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

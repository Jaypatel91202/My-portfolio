import React from "react";
import "./Resume.scss";

const Resume = () => {
  const contactInfo = [
    "jaypatel91202@gmail.com",
    "linkedin.com/in/jay-patel09",
    "github.com/Jaypatel91202",
  ];
  const education = [
    {
      title: "Bachelor of Technology",
      duration: "2021 - 2025",
      institution: "Sardar vallabhbhai Patel institute of Technology",
      description:
        "During my B.Tech, I immersed myself in hands-on projects involving modern programming languages, software development tools, and system design. This practical experience helped me build a solid technical foundation and prepared me for real-world challenges in the IT field.",
    },
    
  ];
  const internships = [
    {
      company: "Confidosoft Solutions Pvt Ltd",
      duration: "Januray 2025 - Present",
      location: "Vadodara, Gujarat, India",
      responsibilities: [
        "During my internship, I worked on designing and developing responsive web interfaces using HTML, CSS, JavaScript, Bootstrap, and Angular.",
        "I contributed to real-world projects by applying best practices in front-end development, improving UI/UX, and ensuring mobile compatibility.",
        "Additionally, I collaborated with the team to implement features, debug issues, and enhance overall website performance and user experience.",
      ],
    },
    {
      company: "GSFC LTD",
      duration: "August 2024",
      location: "Vadodara, Gujarat, India",
      responsibilities: [
        "SAP ERP Implementation: Gained hands-on experience in working with SAP ERP modules to streamline business processes and enhance operational efficiency.",
        "Customization & Optimization: Collaborated with the IT team to troubleshoot, customize, and optimize ERP solutions to meet organizational needs.",
        "Workflow Enhancement: Contributed to improving workflow management by implementing efficient ERP configurations and resolving system challenges.",
      ],
    },
    {
      company: "TopNotch IT Consultant",
      duration: "July 2024",
      location: "Vadodara, Gujarat, India",
      responsibilities: [
        "Comprehensive System Development: Designed and implemented a robust education management system with dedicated modules for super admins, faculty, parents, and students..",
        "Secure Authentication & Data Management: Integrated secure authentication mechanisms and optimized data handling using PHP Laravel and MySQL.",
        "Process Optimization: Streamlined academic and administrative workflows, enhancing efficiency in user management, course handling, and communication.",
      ],
    },
    
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href="https://drive.google.com/file/d/1kvr55OMgc20_LmQfg2s17lj7TDkX573H/view?usp=drive_link"
          className="icon resume"
          target="_blank"
          download="Resume"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>

        <p className="justify">
          I am an enthusiastic and dedicated IT graduate with a solid foundation
          in programming and software development. I am eager to leverage my
          skills to contribute to innovative projects and solutions. Committed
          to continuous learning and growth, I aim to apply my technical
          knowledge and problem-solving abilities in a dynamic work environment
          where I can collaborate with experienced professionals and drive
          impactful results.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Jay Patel</h4>
              <p className="justify">
                I am an aspiring and passionate IT professional with a strong
                foundation in programming and software development. I recently
                graduated with a degree in Computer Science and Engineering.
              </p>
              <ul>
                {contactInfo.map((contact, index) => (
                  <li key={index}>{contact}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p className="justify">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Internships</h3>
            {internships.map((internship, index) => (
              <div className="resume-item" key={index}>
                <h4>{internship.company}</h4>
                <h5>{internship.duration}</h5>
                <p>
                  <em>{internship.location}</em>
                </p>
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="justify">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

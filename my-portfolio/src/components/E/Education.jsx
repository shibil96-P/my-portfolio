import React, { useEffect } from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEoGAgiyxgiS79O60EGf2h48SI-ffxoDARf1wxdDymEIXQIiaxqVlMBoThMHWBuuTHeo",
      institution: "Techolas",
      degree: "Full Stack Development (Python Full Stack)",
      year: "2024",
      grade: "Certificate of Completion",
      description:
        "Completed an intensive Full Stack Development course, focusing on MySql, Python, React, and Django. Gained hands-on experience in building web applications.",
      certificateLink: "https://www.guvi.in/share-certificate/DM34BR91925XC229H7",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbJmfkzVuXUcW4hi4WdTZ19Lkckw2gRsnN3aKS5TMsbHwgOcXLDjU1wU&s",
      institution: "Clicut University",
      degree: "Bachelor’s Degree in Computer Applications (BCA)",
      year: "2021 - 2024",
      grade: "First Class",
      description:
        "Completed Bachelor’s in Computer Applications with a strong foundation in programming, data structures, and web development.",
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".education-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <p className="education-subtitle">
        My educational journey has shaped my skills and knowledge in
        programming and web development.
      </p>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div className="education-item" key={index}>
            <div className="education-logo">
              <img src={item.logo} alt={item.institution} />
            </div>
            <div className="education-content">
              <h3 className="institution-name">{item.institution}</h3>
              <p className="degree">{item.degree}</p>
              <p className="year">{item.year}</p>
              {item.grade && <p className="grade">Grade: {item.grade}</p>}
              <p className="description">{item.description}</p>
              {item.certificateLink && (
                <a
                  href={item.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-button"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="closing-statement">
        <p>Thank you for visiting my portfolio!</p>
        <span className="smile-emoji">😊🤝</span>
      </div>
    </div>
  );
};

export default Education;

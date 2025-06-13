import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [nameText, setNameText] = useState("Hello, I'm Shibil!");

  const texts = [
    "Hi, I'm Shibi!",
    "Welcome to My Site!",
    "A Web Developer!",
  ];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setNameText(texts[index]);
      index = (index + 1) % texts.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="left-section">
        <h1 className="name">{nameText}</h1>
        <p className="Description">
          Python Full Stack Developer skilled in Django, React, JavaScript, HTML, and CSS.
          Passionate about building modern, responsive, and user-friendly web
          applications. Let's create something amazing together!
        </p>
        <div className="social-links">
          <a
            href="http://linkedin.com/in/shibil-p-770400332"
                        target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/shibil96-P"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/shib.iee?igsh=MWwzNm9vb2F3cTltcA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/9605719646"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:shibiljr1@gmail.com" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="right-section">
        <div className="photo-frame">
          <img
            src="/images/Sh1.jpg"
            alt="Shibil"
            className="profile-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
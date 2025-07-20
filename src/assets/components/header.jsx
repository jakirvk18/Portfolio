import React, { useEffect } from "react";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";
import "../css/header.css"; // your custom CSS
import profileImg from "../images/Srinu.jpg"; // adjust path as needed

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="container">
      {/* NAVBAR */}
      

      {/* HERO SECTION */}
      <section className="hero">
        <div className="content" data-aos="fade-right">
          <h3>Hello, It's Me</h3>
          <h1>Jakir Hussain</h1>
          <h2>
            And I'm a <span className="highlight">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "Machine Learning Engineer", 2000,
                  "Data Scientist", 2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </span>
          </h2>
          <p>
            I am a passionate developer with expertise in building scalable web applications and machine learning models. I love to explore new technologies and apply them to solve real-world problems.
          </p>

          <div className="socials" data-aos="zoom-in" data-aos-delay="300">
            <a href="https://www.facebook.com/profile.php?id=100053639445031" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com/jakirvk18" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/zakir_vk18/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/jakir-hussain-59833b28b" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          </div>

          <a onClick={() => window.open("https://drive.google.com/file/d/1j-p1c0vEdzCLJsYQH3MxVul0n0deCH80/view?usp=drive_link", "_blank")} className="btn" data-aos="fade-up" data-aos-delay="500" style={{cursor: "pointer"}}>Download CV</a>
        </div>

        <div className="profile" data-aos="fade-left">
          <div className="hexagon">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      </section>
    </div>
  );
}

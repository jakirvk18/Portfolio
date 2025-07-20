import { useState } from "react";
import Contact from "./contact";
import Skills from "./skills";
import Extracurr from "./extracurr";
import Header from "./header";
import Navbar from "./navbar";
import AboutMe from "./Aboutme";
import EduBack from "./EduBack";
import Project from "./project";
function Home() {
  
  return (
    <div>
      <Navbar />
      <Header />
      
      <div id="about">
        <AboutMe/>
      </div>
      <div id ="schooling">
        <h1 style={{ textAlign: "left", fontSize: "2rem", marginTop: "50px" }}>
          My Journey
        </h1>
        <center>
          <EduBack/>
        </center>
      </div>
      <div className="skills" id="skills">
       
        <h1 style={{ textAlign: "left", fontSize: "2rem", marginTop: "50px" }}>
          My Skills 
        </h1>
        <center> <Skills width={700} id="skills"  /></center>
      </div>
      <br />
      
      <div className="extracurr">
        <h1 style={{ textAlign: "left", fontSize: "2rem",
  marginBottom: "20px" }}>
            Extracurricular Activities
        </h1>
        <center><Extracurr /></center>
      </div>
      <div id="projects">
        <h1 style={{ textAlign: "left", fontSize: "2rem", marginBottom: "20px" }} >
          Projects
        </h1>
          <Project/>
      </div>
      <br />
      <br />
      <div >
        <h1 style={{ textAlign: "left", fontSize: "2rem", marginBottom: "20px" }} id="contact">
          Contact
        </h1>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
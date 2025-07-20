import React from 'react';
// Assuming Link from 'react-router-dom' is still needed for external routes
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  // Function to handle smooth scrolling for internal anchor links
  const handleSmoothScroll = (event, targetId) => {
    // Prevent the default anchor link behavior
    event.preventDefault(); 

    // Find the target element by its ID
    const targetElement = document.getElementById(targetId);

    // If the target element exists, scroll to it smoothly
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Enable smooth scrolling
        block: 'start',      // Align the top of the element with the top of the viewport
      });
    }
  };

  return (
    <div>
      <nav className="navbar" data-aos="fade-down">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
          {/* Home link - uses Link for routing to the homepage */}
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
         
        
         
         
          
          {/* Projects link - uses Link for routing to the projects page */}
          <li>
            <Link to="/projects">
              Projects
            </Link>
          </li>
          
        
        </ul>
        <ul className = 'nav-links'>
           {/* About link - uses onClick for smooth scrolling to the #about section */}
            <li>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>
              About
            </a>
          </li>
           {/* Skills link - uses onClick for smooth scrolling to the #skills section */}
           <li>
            <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>
              Skills
            </a>
          </li>
          {/* Contact link - uses onClick for smooth scrolling to the #contact section */}
            <li>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

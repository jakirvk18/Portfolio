import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/contact.css'
import {Link} from "react-router-dom";

function Contact() {
    return (
        <div className='contact'>
            <div className="header">

                <div className="header-text" id='about'>
                    <h2>
                        Contact
                    </h2>

                    <ul type="none">
                        <li>
                            <a href="https://www.linkedin.com/in/jakir-hussain-59833b28b/" target='_blank'><i class="fa-brands fa-linkedin"></i> jakir-hussain</a>
                        </li>
                        <li><i class="fa-solid fa-envelope"></i> jakirsks646@gmail.com</li>
                        <li><a href="https://github.com/jakirvk18
                        " target='_blank'><i class="fa-brands fa-github"></i> jakirhussain</a></li>
                    </ul>
                </div>
                <div className="header-text" id='portfolio'>
                    <h2>
                        Portfolio
                    </h2>

                    <ul type="none">
                        <li><a href="#skills">Skills</a></li>
                        <li><Link to ="/projects">Projects</Link></li>
                        <li><a href="#schooling">
                            Journey</a></li>
                    </ul>
                </div>

            </div>
            <div className="name">
                <h1>
                    Jakir Hussain
                </h1>
            </div>
            <div className="footer">
                <p>
                    Designed and developed by &copy; 2025 NZK team. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Contact

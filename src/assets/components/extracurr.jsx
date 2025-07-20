import React from 'react'
import ec1 from '../images/ec1.jpg';
import ec2 from '../images/ec2.jpg';
import '../css/extracurr.css';
const Extracurr = () => {
  return (
    <div>
      <div className="content-extaracurr">
        <div className="container-extracurr" id="container-extracurr-left">
            <h1>
                Lakshya 2K25
            </h1>
            <p>
                Lakshya 2K25 is a national level technical fest organized by the Department of Computer Science and Engineering, LBRCE. It is a platform for students to showcase their technical skills and compete in various events. The fest includes workshops, coding competitions, and guest lectures from industry experts.
            </p>
        </div>
        <div className='container-extracurr' id ="container-extracurr-right">
            <img src={ec1} alt="lakshya" />
        </div>
      </div>
      <div className="content-extracurr">
        <div className="container-extracurr" id="container-extracurr-left">
            <img src={ec2} alt="annual-day" />
        </div>
        <div className="container-extracurr" id="container-extracurr-right">
            <h1>
                Sports meet 2024
            </h1>
            <p>
                The Sports meet 2024 is an annual event that brings together students from various departments to compete in a range of sporting activities. The event promotes physical fitness, teamwork, and sportsmanship among students. It features competitions in athletics, team sports, and other recreational activities.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Extracurr;

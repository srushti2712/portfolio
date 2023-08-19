import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/about1.jpg"
import React2 from "../assets/about2.jpg"
const AboutContent = () => {
  return (
    <div className="about" >
        <div className="left">
            <h1>About Me</h1>
            <p>
            I'm Srushti Bendke, currently pursuing my undergraduate degree in Electronics and Communication Engineering from Sardar Vallabhbhai National Institute of Technology, Surat.
            <br />
            I have experience in designing and developing user-friendly and responsive websites using
          
          <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
      </ul>
      I believe in continuously learning and improving my skills to stay up-to-date with the latest technologies in the industry.<br /> I enjoy working in collaborative environments and solving complex problems through innovative solutions.<br />
      Feel free to reach out to me at srushtibendke@gmail.com to discuss potential projects or collaborations.</p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
        </div>
        <div className="right">
          <div className="img-container"  >
            <div className="img-stack top">
                <img src={React1}
                className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={React2}
                className="img" alt="true"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutContent;
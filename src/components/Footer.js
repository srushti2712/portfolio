import "./FooterStyles.css"

import React from "react"
import {FaHome,FaPhone,FaMailBulk, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
               
                <div>
                    <p>Raj Royal city</p>
                    <p> Nanded-431605,Maharashtra</p>
                </div> </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                7249223238</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <a href="mailto:srushtibendke@gmail.com" style={{ color: "#fff" }}>
      srushtibendke@gmail.com
    </a></h4>
                </div>
                <div className="linkedin">
                <h4><FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <a href="https://www.linkedin.com/in/srushti-bendke-290338248"
      
    >
      Linkedin
    </a>
</h4>
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer
import "./ExpContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import Exp1 from "../assets/cev.png"
import Exp2 from "../assets/gdsc.png"
const ExpContent = () => {
  return (
    <div className="por" >
        <div className="left">
        <h1>Position of Responsibilities</h1>
    <p>1. Director at Cutting Edge Visionaries- May 2023 - current<br></br>(A technical society at SVNIT)</p>
    
    <p>2. Executive at Cutting Edge Visionaries- September 2022 - May 2023(A technical society at SVNIT)</p>

    <p>3. Junior developer at Google Developer Students' Club -November 2022 - May 2023</p>
       
     
        </div>
        <div className="right">
          <div className="img-container"  >
            <div className="img-stack top">
                <img src={Exp1}
                className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={Exp2}
                className="img" alt="true"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ExpContent;
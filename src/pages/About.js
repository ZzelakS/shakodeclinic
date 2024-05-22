import React from "react";
import MultiplePizzas from "../assets/logo.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We provide compassionate care and promote healthy lifestyle through the use of natural herbs(tewe-tegbo) and traditional knowledge that has been passed down through generations
        </p>
      </div>
    </div>
  );
}

export default About;

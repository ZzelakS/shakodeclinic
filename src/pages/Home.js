import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/logo.png";
import "../styles/Home.css";
import Slider from "../components/Slider.js";

function Home() {
  return (
    <div className="home">
      {/* <div className="bg-image"></div> */}
      <div className="headerContainer">
        <h1> Shakode Herbal Clinic </h1>
        <p> IBILE ROOTS AND HERBAL HEALING CENTRE </p>
        <Link to="/menu">
          <button> Our Services</button>
        </Link>
        <Slider/>
      </div>
    </div>
  );
}

export default Home;

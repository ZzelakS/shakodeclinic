import React from "react";
import "react-slideshow-image/dist/styles.css";
import "../styles/image-slider.css";
// import FirstSlide from '../assets/2.jpeg'
import { Fade, Zoom, Slide } from "react-slideshow-image";

const FirstSlide = require("../assets/2.jpeg");
const SecondSlide = require("../assets/5.jpeg");
const ThirdSlide = require("../assets/1.jpeg");

function Slider() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
      // data-bs-interval="100"
    >
      <div class="carousel-inner justify-content-center justify-content-md-center justify-content-sm-center rounded">
        <div class="carousel-item active" data-interval="5000">
          <img class="" style={{ width: 400, height: 400 }} src={FirstSlide} />
        </div>
        <div class="carousel-item active" data-interval="5000">
          <img class="" style={{ width: 400, height: 400 }} src={SecondSlide} />
        </div>
        <div class="carousel-item active" data-interval="5000">
          <img class="" style={{ width: 400, height: 400 }} src={ThirdSlide} />
        </div>
      </div>
    </div>
  );
}

export default Slider;

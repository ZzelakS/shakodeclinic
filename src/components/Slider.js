import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import '../styles/image-slider.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image' 

const slideImages = [
  {
    url: require ("../assets/1.jpeg"),
    // caption: 'First Slide'
  },
  
  {
    url: require ("../assets/2.jpeg"),
    // caption: 'First Slide'
  },
  
  {
    url: require ("../assets/5.jpeg"),
    // caption: 'First Slide'
  },
];


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  height: '350px',
  // paddingTop: '100px',
  // paddingBottom: '100px',
  backgroundSize: 'cover',
}

const spanStyle = {
  // fontSize: '20px',
  // background: '#efefef',
  // color:
}

function Slider() {
  return (
    <div className='slide-container'>
      <Fade>
          {slideImages.map((image, index) => (
            <div key={index}>
              <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                  {/* <span style={{}}>{image.caption}</span> */}
              </div>
            </div>
          ))}
      </Fade>

    </div>
  );
}

export default Slider;
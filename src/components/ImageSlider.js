import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image' 

const slideImages = [
  {
    url:"C:/Users/VR PLACE/Documents/Shakode/shakode/src/assets/5.jpeg",
    caption: 'First Slide'
  },
  // {
  //   url:
  //   caption: 'Second Slide'
  // },
  // {
  //   url:
  //   caption: 'Third SLide'
  // },
];


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
  backgroundSize: 'cover',
}

const spanStyle = {
  fontSize: '20px',
  background: '#efefef',
  // color:
}

function ImageSlider() {
  return (
    <div className='slide-container'>
      <Fade>
          {slideImages.map((image, index) => (
            <div key={index}>
              <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                  <span style={{}}>{image.caption}</span>
              </div>
            </div>
          ))}
      </Fade>

    </div>
  )
}

export default ImageSlider;
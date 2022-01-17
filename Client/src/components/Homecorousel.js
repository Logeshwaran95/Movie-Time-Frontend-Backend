import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Homecorousel() {
    return (
        <div>
   <Carousel indicators={false} controls={true} id="corousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/fUWOPL6.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/f0nyls4.png"
      alt="Second slide"
      
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/SHL4IXH.png"
      alt="Third slide"
      
    />
  </Carousel.Item>
</Carousel>  
        </div>
    );
}

export default Homecorousel;
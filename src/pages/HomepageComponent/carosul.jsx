// src/components/MultiCardCarousel.js

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import laserResurfacingImage from "./images/MaskGroup(6).png";
import chemicalPeelsImage from './images/chemical_peels..png';       // replace with actual image import
import acneBluelightImage from './images/acnebluelight.png';       // replace with actual image import
import thermageImage from './images/thermageImage.png';                  // replace with actual image import
import botoxImage from './images/botoxImage.png';   
const MultiCardCarousel = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
      }
    };
  
    const items = [
      { id: 1, title: 'Laser Resurfacing', description: 'Lorem Ipsum', image: botoxImage },
      { id: 2, title: 'Chemical Peels', description: 'Lorem Ipsum', image: thermageImage },
      { id: 3, title: 'Acne Bluelight Therapy', description: 'Lorem Ipsum', image: laserResurfacingImage },
      { id: 4, title: 'Thermage', description: 'Lorem Ipsum', image: acneBluelightImage },
      { id: 5, title: 'Botox', description: 'Lorem Ipsum', image: chemicalPeelsImage},
    ];
  
    return (
      <div className='flex justify-center mt-11 '>
        <div className='w-[80%] p-1 '>
          <Carousel responsive={responsive}  draggable={false} customLeftArrow={null} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
            {items.map(item => (
              <div key={item.id} className="carousel-item text-center mr-2 rounded-md">
                <img className='w-full h-56 rounded-md object-cover'  src={item.image} alt={item.title} />
                <h3 className='  text-left font-[Raleway] font-[600] text-[17px] text-[#351120]'>{item.title}</h3>
                <p className='  text-left text-[#351120] font-[300]'>{item.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };
  

export default MultiCardCarousel;

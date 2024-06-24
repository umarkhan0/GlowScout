// src/components/MultiCardCarousel.js

import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Carousel from 'react-multi-carousel';
// import IMGremovebgPreview from "./images/IMG_3027-removebg-preview.png"
import 'react-multi-carousel/lib/styles.css';
import youngModelRed from "./images/young-model-red-bodycon-dress_144627-33413-removebg-preview.png";
import { CustomLeftArrow , CustomRightArrow } from './customArrows.jsx';
import {Rating , Stack} from '@mui/material/';
import EUROAI2british1 from "./images/main-qimg-645fe83573b4912645b701b5502b62a2-lq-removebg-preview.jpg";
import laserResurfacingImage from "./images/MaskGroup(6).png";
import chemicalPeelsImage from './images/chemical_peels..png';       // replace with actual image import
import acneBluelightImage from './images/acnebluelight.png';       // replace with actual image import
import thermageImage from './images/thermageImage.png';                  // replace with actual image import
import botoxImage from './images/botoxImage.png';   
import ClientsTestimonialsImage from "./images/Client’sTestimonialsImage.png";
const ClintReveiwSlide = () => {
    const responsive = {
        all: { breakpoint: { max: 4000, min: 0 }, items: 1 }
      };
  
    const items = [
      { id: 1, title: 'Ashley K.', description: 'It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.', image: ClientsTestimonialsImage , rating: "4.5" },
      { id: 2, title: 'Chemical Peels',description: 'It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.', image: EUROAI2british1 , rating: "5" },
      { id: 3, title: 'Gone Mom',description: 'It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.', image: youngModelRed , rating: "5" },
      
    ];
  
    return (
      <div className='flex justify-center mt-11 '>
        <div className='sm:w-[80%] w-[90%] p-1 '>
          <Carousel responsive={responsive}  draggable={false} 
          customLeftArrow={<CustomLeftArrow />} 
          infinite={true}
           autoPlay={true}
           showDots={true}
            autoPlaySpeed={3000}
            rewindWithAnimation={true}
            customRightArrow={<CustomRightArrow />}
            >
            {items.map(item => (

<div key={item.id} className="carousel-item flex sm:h-auto  h-[330px] ">

<img className="  w-[40%] rounded-md sm:h-[450px]" src={item.image} alt={item.title} />
<div className="text-container sm:w-[80%]  w-[100%] flex flex-col justify-center ml-4">
<h3 className="title  font-[Raleway] text-[#351120] font-[600] sm:text-[70px] text-[40px]">{item.title}</h3>
<p className="description font-[Raleway] text-[#351120] text-[18px] leading-6">{item.description}</p>
<div className=' mt-4'>
<Stack spacing={1}>
    <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
  </Stack>
  </div>
</div>
</div>
          
            ))}
          </Carousel>
        </div>
      </div>
    );
  };
  

export default ClintReveiwSlide;

// CardSlider.jsx

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'; 

const CardSlider = () => {
  const settings = {
    dots: true,
    
    className: 'center',
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  
    arrows: false, 
    centerMode: true, 
    centerPadding: '0', // Remove padding when in center mode
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <style>

        {`
          .slick-center .card {
            transform: scale(1.1); 
            transition: transform 0.3s ease-in-out; 
          }
        `}
      </style>
      <div className=' mt-3 mb-3'>
        <p className=' text-center font-[Raleway] font-[600] text-[30px]'>Testimonial</p>
        <p className=' text-center font-[Raleway] font-[600] text-[33px] text-[#f15a29]'>What Clients Say About Us</p>
      </div>
      <div className=' flex justify-center items-center w-[100%]  h-[300px]'>
        <div className=' flex justify-center items-center ml-2 w-[85%] '>
          <Slider {...settings} className='w-[100%]'>

            <div className="card cursor-grabbing">
              <div className=' flex flex-col justify-between  w-full h-full'>
                <div className=' p-4'>
                  <p className=' text-[#f15a29] font-bold text-[23px] font-[Raleway]'>Perfect !</p>
                  <p className='  font-[Roboto] leading-5 text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, modi quod inventore neque nobis minima facere libero explicabo? Voluptas animi minus beatae voluptate vitae dolorem repellat numquam distinctio quam voluptatem.</p>
                </div>
                <div className=' bottom-0  flex justify-center items-center relative h-8 rounded-b-[7px]  bg-[#f15a29]'>
                  <p className=' text-[#fff]'>EDGE focus</p>
                </div>
              </div>
            </div>
            <div className="card cursor-grabbing">
              <div className=' flex flex-col justify-between  w-full h-full'>
                <div className=' p-4'>
                  <p className=' text-[#f15a29] font-bold text-[23px] font-[Raleway]'>Perfect !</p>
                  <p className='  font-[Roboto] leading-5 text-[17px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, modi quod inventore neque nobis minima facere libero explicabo? Voluptas animi minus beatae voluptate vitae dolorem repellat numquam distinctio quam voluptatem.</p>
                </div>
                <div className=' bottom-0  flex justify-center items-center relative h-8 rounded-b-[7px]  bg-[#f15a29]'>
                  <p className=' text-[#fff]'>EDGE focus</p>
                </div>
              </div>
            </div>
            <div className="card  cursor-grabbing">
              <div className=' flex flex-col justify-between  w-full h-full'>
                <div className=' p-4'>
                  <p className=' text-[#f15a29] font-bold text-[23px] font-[Raleway]'>Perfect !</p>
                  <p className='  font-[Roboto] leading-5 text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, modi quod inventore neque nobis minima facere libero explicabo? Voluptas animi minus beatae voluptate vitae dolorem repellat numquam distinctio quam voluptatem.</p>
                </div>
                <div className=' bottom-0  flex justify-center items-center relative h-8 rounded-b-[7px]  bg-[#f15a29]'>
                  <p className=' text-[#fff]'>EDGE focus</p>
                </div>
              </div>
            </div> <div className="card  cursor-grabbing">
              <div className=' flex flex-col justify-between  w-full h-full'>
                <div className=' p-4'>
                  <p className=' text-[#f15a29] font-bold text-[23px] font-[Raleway]'>Perfect !</p>
                  <p className='  font-[Roboto] leading-5 text-[17px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, modi quod inventore neque nobis minima facere libero explicabo? Voluptas animi minus beatae voluptate vitae dolorem repellat numquam distinctio quam voluptatem.</p>
                </div>
                <div className=' bottom-0  flex justify-center items-center relative h-8 rounded-b-[7px]  bg-[#f15a29]'>
                  <p className=' text-[#fff]'>EDGE focus</p>
                </div>
              </div>
            </div> <div className="card cursor-grabbing">
              <div className=' flex flex-col justify-between  w-full h-full'>
                <div className=' p-4'>
                  <p className=' text-[#f15a29] font-bold text-[23px] font-[Raleway]'>Perfect !</p>
                  <p className='  font-[Roboto] leading-5 text-[17px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, modi quod inventore neque nobis minima facere libero explicabo? Voluptas animi minus beatae voluptate vitae dolorem repellat numquam distinctio quam voluptatem.</p>
                </div>
                <div className=' bottom-0  flex justify-center items-center relative h-8 rounded-b-[7px]  bg-[#f15a29]'>
                  <p className=' text-[#fff]'>EDGE focus</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CardSlider;

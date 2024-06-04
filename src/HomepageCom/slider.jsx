import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logoImage from "../images/silder_Logo-26FfYYw1.png";
import { Button , Stack } from '@mui/material';
const buttonStyle = {
    width: '30px',
    background: 'none',
    border: '0px',
};

const slideStyles = {
    height: '500px',
    backgroundSize: 'cover',
    marginTop: "8px",
    // backgroundPosition: "top center",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><KeyboardArrowLeftIcon fontSize='medium' sx={{ color: "#fff" }} /></button>,
    nextArrow: <button style={{ ...buttonStyle }}><ChevronRightIcon fontSize='medium' sx={{ color: "#fff" }} /></button>,
};

const Example = () => {
    return (
        <div>
            <Slide {...properties}>
                <div className="each-slide-effect">
                    <div style={{ ...slideStyles, backgroundImage: 'url(https://www.3const.com/assets/bg_Slider13-PkNjIbfM.webp)' }}>
                        <span className=' flex justify-center items-center flex-col'>
                            <img className=' h-12 w-30' src={logoImage} alt="" />
                            <p className=' text-[#ff5522] text-center leading-4 mb-4 mt-4 font-bold font-[Raleway] text-[20px]'>Services Beyond Imagination</p>
                            <p className=' text-[#fff] text-[13px] text-center'>Startups, Apps, Creativity, Portfolios, and Startup Events</p>
                            <Stack direction="row" spacing={2} sx={{ display: "flex" , marginTop: "10px" }}>
                                <Button variant="contained" sx={{
                                    backgroundColor: "#f15a29",
                                    color: 'white',
                                    fontFamily: "Raleway",
                                    borderRadius: "20px",
                                    fontWeight: "bold",
                                    fontSize: "11px",
                                    '&:hover': {
                                        backgroundColor: "#d94410", // Change this to the desired hover color
                                    },
                                }}>
                                    Contact us Directly
                                </Button>
                            </Stack>
                        </span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ ...slideStyles, backgroundImage: 'url(https://www.3const.com/assets/bg_Slider7-v7dIZwKn.gif)' }}>
                    <span className=' flex justify-center items-center flex-col'>
                            <img className=' h-12 w-30' src={logoImage} alt="" />
                            <p className=' text-[#ff5522] text-center leading-4 mb-4 mt-4 font-bold font-[Raleway] text-[20px]'>Services Beyond Imagination</p>
                            <p className=' text-[#fff] text-[13px] text-center'>Startups, Apps, Creativity, Portfolios, and Startup Events</p>
                            <Stack direction="row" spacing={2} sx={{ display: "flex" , marginTop: "10px" }}>
                                <Button variant="contained" sx={{
                                    backgroundColor: "#f15a29",
                                    color: 'white',
                                    fontFamily: "Raleway",
                                    borderRadius: "20px",
                                    fontWeight: "bold",
                                    fontSize: "11px",
                                    '&:hover': {
                                        backgroundColor: "#d94410", // Change this to the desired hover color
                                    },
                                }}>
                                    Contact us Directly
                                </Button>
                            </Stack>
                        </span>


                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ ...slideStyles, backgroundImage: 'url(https://www.3const.com/assets/bg_Slider12-n4y6DU68.webp)' }}>
                    <span className=' flex justify-center items-center flex-col'>
                            <img className=' h-12 w-30' src={logoImage} alt="" />
                            <p className=' text-[#ff5522] text-center leading-4 mb-4 mt-4 font-bold font-[Raleway] text-[20px]'>Services Beyond Imagination</p>
                            <p className=' text-[#fff] text-[13px] text-center'>Startups, Apps, Creativity, Portfolios, and Startup Events</p>
                            <Stack direction="row" spacing={2} sx={{ display: "flex" , marginTop: "10px" }}>
                                <Button variant="contained" sx={{
                                    backgroundColor: "#f15a29",
                                    color: 'white',
                                    fontFamily: "Raleway",
                                    borderRadius: "20px",
                                    fontWeight: "bold",
                                    fontSize: "11px",
                                    '&:hover': {
                                        backgroundColor: "#d94410", // Change this to the desired hover color
                                    },
                                }}>
                                    Contact us Directly
                                </Button>
                            </Stack>
                        </span>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Example;

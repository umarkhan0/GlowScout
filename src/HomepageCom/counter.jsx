import mockUp from "../images/mockup3_-hSm6nsp5.webp";
import logo1 from "../images/icons/Icon.png"
import logo2 from "../images/icons/Icon (1).png";
import logo3 from "../images/icons/Icon (2).png";
import React, { useState, useEffect } from 'react';
import { Stack, Button } from "@mui/material";
import CountUp from 'react-countup';
import SececendSectionSecendImage from "../pages/HomepageComponent/images/SecondImage.png"
export default function Counter() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const counterElement = document.getElementById('counter');
            const counterPosition = counterElement.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            if (scrollY + windowHeight >= counterPosition) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className=" mt-8 flex justify-around flex-wrap ">
            <div className=" sm:w-[45%] w-full justify-center flex flex-col sm:justify-between  sm:p-5 p-2">
             
              

                <div className=" flex justify-between sm:flex-nowrap flex-wrap">
                    <div className="  shadow-sm rounded-sm w-full bg-[#e5e4e2] flex flex-col p-3 items-center  justify-center">

                        <img className=" h-20 w-20 " src={"https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/signup-icon.png"} alt="" />
                        <p className=" text-[40px] font-bold border-b border-[#fe693c] mt-4 font-[Raleway]">





                            <div id="counter">
                                <CountUp start={0} end={58} duration={2} useEasing={true} startOnMount={false} redraw={true} >
                                    {({ countUpRef, start }) => (
                                        <div ref={countUpRef}>
                                            {isVisible && start()}
                                        </div>
                                    )}
                                </CountUp>
                            </div>




                        </p>
                        <p className=" font-bold text-[14px] mt-6 text-center mb-5">Projects delivered</p>


                    </div>
                    <div className="  shadow-sm rounded-sm w-full bg-[#e5e4e2] flex flex-col p-3 items-center  justify-center">

                        <img className=" h-20 w-20 " src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHGIei6gkQ8B1M1AQcbyUUIOXqRL9oDeGnLRTOUmJHioCEW7kv9BRGi41SarSipXrs9U&usqp=CAU"} alt="" />
                        <p className=" text-[40px] font-bold border-b border-[#fe693c] mt-4 font-[Raleway]">

                            <div id="counter">
                                <CountUp start={0} end={300} duration={2} useEasing={true} startOnMount={false} redraw={true} >
                                    {({ countUpRef, start }) => (
                                        <div ref={countUpRef}>
                                            {isVisible && start()}
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                        </p>
                        <p className=" font-bold text-[14px] mt-6 text-center">Worldwide satisfied customers</p>


                    </div>
                    <div className="  shadow-sm rounded-sm w-full bg-[#e5e4e2] flex flex-col p-3 items-center  justify-center">

                        <img className=" h-20 w-20 " src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3jeCmsS0EEhcviWJx2xYkvNrArWd8dwFvQ&s"} alt="" />
                        <p className=" text-[40px] font-bold border-b border-[#fe693c] mt-4 font-[Raleway]">
                            <div id="counter">
                                <CountUp start={0} end={35} duration={2} useEasing={true} startOnMount={false} redraw={true} >
                                    {({ countUpRef, start }) => (
                                        <div ref={countUpRef}>
                                            {isVisible && start()}
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                        </p>
                        <p className=" font-bold text-[14px] mt-6 text-center mb-5">Companies served</p>


                    </div>
                </div>
                
                <div className="sm:mt-0  mt-3">
                <Stack direction="row" spacing={2} >
                    <Button variant="contained" sx={{
                        backgroundColor: "#0D2D81",
                        color: 'white',
                        fontFamily: "Raleway",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        width: "115px",
                        '&:hover': {
                            backgroundColor: "#0D2D81", // Change this to the desired hover color
                        },
                    }}>

                        CONTACT US
                    </Button>
                </Stack>
</div>


            </div>
         

        </div>
    )
};
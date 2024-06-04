import logoImg from "../images/Logo--3-Const-hi-res 2.png";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import facebookImage from "../images/icons/download.png";
import instaLogo from "../images/icons/download (2).png";
import linkDinLogo from "../images/icons/download (3).png";
import twiter from "../images/icons/download (1).png";
const Footer = () => {
    return (
        <>


<hr className=" mt-9" />
            <img className=" h-10  ml-9 mt-4" src={logoImg} alt="" />

            <footer>

                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    
                
                    <div class="md:flex md:justify-around">

                    
                        <div>
                           
                            <p class="mb-6 text-red-500 text-[21px] underline  font-semibold uppercase font-[Raleway] ">ABOUT US</p>
                            <p className=" sm:w-[250px] w-full">As the pioneer of the lean startup movement, 3Const has dedicated it’s time to sharing effective business strategies that help new businesses and enterpreneurs put their money to work in the right way.</p>
                        </div>
                        <div>
                        <p class="mb-6 text-red-500 text-[21px] underline  font-semibold uppercase font-[Raleway] ">Pages</p>
                            <ul className=" font-medium">
                                <li className="mb-4 md:w-[220px] leading-3">
                                    <p className="hover:text-red-500 cursor-pointer">Home</p>
                                </li>
                                <li className="mb-4 md:w-[220px] leading-3">
                                    <p className="hover:text-red-500 cursor-pointer">About us</p>
                                </li>
                                <li className="mb-4 md:w-[220px] leading-3">
                                    <a href="#" className="hover:text-red-500 cursor-pointer">Services</a>
                                </li>
                                <li className="mb-4 md:w-[220px] leading-3">
                                    <p className="hover:text-red-500 cursor-pointer">Career</p>
                                </li>
                                <li className="mb-4 md:w-[220px] leading-3">
                                    <p className="hover:text-red-500 cursor-pointer">Pricing</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                           
                           <p class="mb-6 text-red-500 text-[21px] underline  font-semibold uppercase font-[Raleway] ">Contact Us</p>
                           <ul class="font-medium">
                           <li className="mb-4 flex items-center md:w-[220px] leading-5">
                           <CallIcon fontSize="small" />
                                    <p className="hover:text-red-500 cursor-pointer ml-2">
                                        
                                        +92 332 2287638</p>
                                </li>
                                <li className="mb-4 flex items-center md:w-[220px] leading-5">
                                <EmailIcon fontSize="small" />
                                    <p className="hover:text-red-500 cursor-pointer ml-2">
                                        
                                        info@3const.com</p>
                                </li>
                                <li className="mb-4 flex justify-center md:w-[220px] leading-5">
                                <LocationOnIcon fontSize="small" />

                                    <p className="hover:text-red-500 cursor-pointer ml-2">
                                        3Const, Plot No# R-07 Block 10-A gulistan e johar</p>
                                </li>
                             
                            </ul>
                       </div>
                       <div>
                           
                           <p class="mb-6 text-red-500 text-[21px] underline  font-semibold uppercase font-[Raleway] ">Follow Us</p>
                           <ul class=" font-medium">
                                <li class="mb-4 md:w-[220px] flex items-center leading-3">
                                    <img src={facebookImage} alt="" />
                                    <p className="hover:text-red-500 ml-2 cursor-pointer">
                                        
                                        www.facebook.com</p>
                                </li>
                                <li class="mb-4 md:w-[220px] flex items-center leading-3">
                                    <img src={twiter} alt="" />
                                    <p className="hover:text-red-500 ml-2 cursor-pointer">
                                        
                                        www.twitter.com</p>
                                </li>
                                <li class="mb-4 md:w-[220px] flex items-center leading-3">
                                    <img src={instaLogo} alt="" />
                                    <p className="hover:text-red-500 ml-2 cursor-pointer">
                                        
                                        www.instagram.com</p>
                                </li>
                                <li class="mb-4 md:w-[220px] flex items-center leading-3">
                                    <img src={linkDinLogo} alt="" />
                                    <p className="hover:text-red-500 ml-2 cursor-pointer">
                                        
                                        www.linkedin.com</p>
                                </li>
                              
                            </ul>
                       </div>
                    </div>


                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2Copyright by 3Const. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <p>Privacy & Policy</p>
                          
                         
                           
                           
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
};
export default Footer;
import TopArrow from "../ReUsebalComponenets/TopArrow";
import DrawerAppBar from "../ReUsebalComponenets/header";
import Slider from "../HomepageCom/slider";
import Counter from "../HomepageCom/counter";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Stack, Button } from "@mui/material";
import SwiperSlider from '../ReUsebalComponenets/cardsCarasol.jsx';
import butifullGirl from "../images/firstContainerButifullGirl.png"
import BasicSelect from "../ReUsebalComponenets/select.jsx";
import SececendSectionSecendImage from "../pages/HomepageComponent/images/SecondImage.png";
import treatmentImage from "../pages/HomepageComponent/images/treatmentImage.png";
import selectSpa from "../pages/HomepageComponent/images/selectSpa.png";
import MultiCardCarousel from "./HomepageComponent/carosul.jsx";
import ClintReveiwSlide from "./HomepageComponent/clintRevevioSlider.jsx";
import brownSection1 from "./HomepageComponent/images/brownSection1.png";
import brownSection2 from "./HomepageComponent/images/brownSection2.png";
import Footer from "../ReUsebalComponenets/footer.jsx" 
export default function Home() {
  return (
    <>
      <div>
        <DrawerAppBar />
        <section>
          <div class="relative  flex mt-16 lg:mt-5 flex-col justify-center items-center   md:flex-row md:justify-between  ">
            <div class="md:text-center px-6 sm:text-left md:w-[40%] ">
              <p class="text-[#351120] sm:text-center md:w-[100%] font-[Valky] font-[400] text-[35px]">REVEAL YOUR  BEAUTY WITH </p>
              <p className="text-[#351120] sm:text-center  font-[Raleway] font-[300] text-[53px] leading-10">Glow Scout</p>
              <p className="text-[#351120] leading-4 mt-4  font-[Valky]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut ut nibh faucibus.
              </p>
              <Stack direction="row" spacing={2} sx={{ marginTop: "12px" }}>
                <Button variant="contained" sx={{
                  color: '#351120',
                  marginLeft: '4px',
                  marginTop: "10px",
                  padding: "16px, 32px, 16px, 32px",
                  border: "2px solid #351120",
                  fontFamily: "Raleway",
                  borderRadius: "25px",
                  backgroundColor: "#fff", // Change this to the desired hover color
                  '&:hover': {
                    backgroundColor: "#fff", // Change this to the desired hover color
                  },
                }}>
                  <span className=" mr-2"> Sign Up</span> <OpenInFullIcon color="#351120" fontSize="10px" />
                </Button>
              </Stack>
            </div>
            <div className="md:w-[50%] ">
              <img src={butifullGirl} alt="A woman holding her face" class="w-full rounded-md  h-full" />
            </div>
            <div className="  bottom-3  absolute flex justify-center items-center w-full">
              <div className="w-[550px] rounded-full px-2 py-2 flex justify-between items-center bg-[#F6E9CE] bg-opacity-60 sm:h-[52px]">
                <div className=" flex flex-wrap justify-around  w-full">
                  <div className=" flex w-[85%]  sm:w-auto">
                    <div className="   w-full">

                      <BasicSelect placholder="Select your Goals" />
                    </div>
                    <span className=" mx-2 flex justify-center items-center text-center ">|</span>
                    <div className="   w-full">
                      <BasicSelect placholder="Select your Location" />
                    </div>
                  </div>
                  <Stack direction="row" spacing={2} sx={{
                    width: { xs: '80%', sm: "auto" },
                    marginTop: { xs: '3px', sm: "auto" },



                  }} >
                    <Button variant="contained" sx={{
                      color: '#fff',
                      width: "100%",
                      padding: "16px, 32px, 16px, 32px",
                      border: "2px solid #351120",
                      fontFamily: "Raleway",
                      borderRadius: "25px",
                      backgroundColor: "#351120",
                      '&:hover': {
                        backgroundColor: "#351120", // Change this to the desired hover color
                      },
                    }}>
                      <span className=" mr-2"> Book Now!</span>
                    </Button>
                  </Stack>
                </div>
              </div>



            </div>
          </div>
        </section>
        <section className=" bg-[#FEF5E3]">
          <div className="  w-full">
            <p className=" py-7 text-center font-[Raleway] font-[300] text-[56px] text-[#351120] ">How Glow Scout Works</p>
            {/* <Counter /> */}
            <div className=" flex justify-center">
              <div className="flex justify-center  w-[80%] py-2 md:flex-nowrap flex-wrap">
                <div className=" flex  justify-center">





                  <div className=" md:ml-0 ml-4 w-[150px]  shadow-lg  sm:mb-auto mb-3 md:mb-3 md:mr-3 relative p-2 py-4 h-[260px] rounded-md bg-[#F6E9CE] sm:w-[180px] text-center flex items-center flex-col">

                    <img className=" h-36 w-full  " src={"https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/signup-icon.png"} alt="" />
                    <p className=" text-center border-b border-[#351120] text-[#351120] font-[600] text-[20px]">01</p>
                    <p className="text-center text-[22px] absolute bottom-1 w-full text-[#351120] font-[Raleway] font-[400]">Sign Up</p>
                  </div>




                  <div className=" shadow-lg   w-[150px] md:ml-0 ml-4  md:mr-3 py-4 h-[260px] rounded-md relative bg-[#F6E9CE] sm:w-[180px] text-center flex items-center flex-col">
                    <img className=" h-36 " src={SececendSectionSecendImage} alt="" />
                    <p className=" text-center border-b border-[#351120] text-[#351120] font-[600] text-[20px]">02</p>
                    <p className="text-center text-[22px] absolute bottom-1 w-full text-[#351120] font-[Raleway] font-[400] leading-6">Select your Beauty Goals</p>

                  </div></div>





                <div className=" flex  justify-center">
                  <div className="  w-[150px] shadow-lg md:mr-3 md:ml-0 ml-4 mt-3 h-[260px] md:mt-0 py-4 rounded-md relative bg-[#F6E9CE] sm:w-[180px] text-center flex items-center flex-col">

                    <img className=" h-36 " src={treatmentImage} alt="" />
                    <p className=" text-center border-b border-[#351120] text-[#351120] font-[600] text-[20px]">03</p>
                    <p className="text-center text-[22px] absolute bottom-1 w-full text-[#351120] font-[Raleway] font-[400]">Select Treatment</p>

                  </div>
                  <div className="relative  w-[150px] md:mt-0 mt-4 md:ml-0 ml-4 py-4 h-[260px] shadow-lg rounded-md bg-[#F6E9CE] sm:w-[180px] text-center flex items-center flex-col">
                    <img className="h-36" src={selectSpa} alt="" />
                    <p className=" text-center border-b border-[#351120] text-[#351120] font-[600] text-[20px]">04</p>
                    <p className="text-center text-[22px] absolute bottom-1 w-full text-[#351120] font-[Raleway] font-[400]">Select Spa</p>
                  </div></div>

              </div></div>
            <div className=" flex justify-center py-10">
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{
                  color: '#fff',
                  width: "180px",
                  padding: "16px, 32px, 16px, 32px",
                  border: "2px solid #351120",
                  fontFamily: "Raleway",
                  borderRadius: "25px",
                  backgroundColor: "#351120",
                  '&:hover': {
                    backgroundColor: "#351120", // Change this to the desired hover color
                  },
                }}>
                  <span className=" mr-2">Get Started</span>
                </Button>
              </Stack>
            </div>
          </div>
        </section>
        <section className=" bg-[#F8F8F8] pb-28 pt-4">
          <div className=" mb-11 ">
            <p className=" pt-7 text-center font-[Raleway]  leading-tight font-[300] text-[56px] text-[#351120] ">Trending Treatments</p>
            <p className=" text-center font-[Raleway] px-2 mt-3 sm:leading-3 leading-6 text-[#351120]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
          </div>
          <MultiCardCarousel />
        </section>
        <section className=" bg-[#FEF5E3] pt-20 pb-14">
          <p className=" pt-7 text-center font-[Raleway]  leading-tight font-[300] text-[56px] text-[#351120] ">Client’s Testimonials</p>
          <ClintReveiwSlide />
        </section>
        <section className=" bg-[#351120] pt-20 pb-14 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="flex  w-full"><img className=" h-[300px] mb-3 sm:mb-0 sm:h-auto" src={brownSection1} alt="" /></div>
          <div className=" sm:w-[90%] w-[100%] px-3">
            <p className=" text-center text-[30px] text-[#F6E9CE] font-[Raleway]">About <br />
              “Glow Scout”</p>
            <p className=" leading-6 text-center text-[#FEF5E3]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh  faucibus. </p>
          </div>
          <div className="flex justify-end w-full"><img className="mt-3 sm:mb-0  h-[300px] sm:h-auto" src={brownSection2} alt="" /></div>
        </section>
        <section className="pt-20 pb-14">
          <p className=" text-[#351120] text-center text-[35px] font-[Raleway]">Are you a business?</p>
          <p className=" text-[#270D18] text-center font-[Raleway] text-base mt-3">People are seeking for the specialist. <br />
          Join us now and serve your skills</p>
          <div className=" flex justify-center ">
          <Stack direction="row" spacing={2} sx={{ marginTop: "12px" }}>
                <Button variant="contained" sx={{
                  color: '#351120',
                  marginLeft: '4px',
                  marginTop: "10px",
                  padding: "16px, 32px, 16px, 32px",
                  border: "2px solid #351120",
                  fontFamily: "Raleway",
                  borderRadius: "25px",
                  backgroundColor: "#fff", // Change this to the desired hover color
                  '&:hover': {
                    backgroundColor: "#fff", // Change this to the desired hover color
                  },
                }}>
                  <span className=" mr-2">Sign Up as Business</span> <OpenInFullIcon color="#351120" fontSize="10px" />
                </Button>
              </Stack>
              
              </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

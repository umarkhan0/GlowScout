import TopArrow from "../ReUsebalComponenets/TopArrow";
import DrawerAppBar from "../ReUsebalComponenets/header";
import Slider from "../HomepageCom/slider";
import BuildingsIntro from "../HomepageCom/buildings";
import Counter from "../HomepageCom/counter";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Footer from "../ReUsebalComponenets/footer";
import { Stack , Button } from "@mui/material";
import SwiperSlider from '../ReUsebalComponenets/cardsCarasol.jsx';
import butifullGirl from "../images/firstContainerButifullGirl.png"
import BasicSelect from "../ReUsebalComponenets/select.jsx";
export default function Home() {
  return (
    <>
      <div>
        <DrawerAppBar />

        <div class="relative  flex mt-8 md:mt-5 flex-col justify-center items-center   md:flex-row md:justify-between  ">
          <div class="md:text-center px-6 sm:text-left md:w-[40%] ">
            <p class="text-[#351120] sm:text-center md:w-[100%] font-[Valky] font-[400] text-[35px]">REVEAL YOUR  BEAUTY WITH </p>
            <p className="text-[#351120] sm:text-center  font-[Raleway] font-[300] text-[53px] leading-10">Glow Scout</p>
            <p className="text-[#351120] leading-4 mt-4  font-[Valky]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut ut nibh faucibus.
            </p>
            <Stack direction="row" spacing={2} sx={{  marginTop:"12px" }}>
              <Button variant="contained" sx={{
                color: '#351120',
                marginLeft: '4px',
                marginTop:"10px",
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
          <div className="w-[550px] rounded-full px-2 flex justify-between items-center bg-[#F6E9CE] bg-opacity-60 h-[52px]">

            <BasicSelect placholder="Select your Goals"/>
            <BasicSelect placholder="Select your Location" />
            <Stack direction="row" spacing={2} >
              <Button variant="contained" sx={{
                color: '#351120',
                padding: "16px, 32px, 16px, 32px",
                border: "2px solid #351120",
                fontFamily: "Raleway",
                borderRadius: "25px",
                backgroundColor: "#fff", // Change this to the desired hover color
                '&:hover': {
                  backgroundColor: "#fff", // Change this to the desired hover color
                },
              }}>
               <span className=" mr-2"> Book Now!</span> 
              </Button>
            </Stack>
          </div>



        </div>
        </div>

      
      </div>
    </>
  )
}

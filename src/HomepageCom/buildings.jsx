import { useState } from "react"
import "../App"
export default function BuildingsIntro() {
    const [ShowFirstText, setShowFirstText] = useState(false);
    const [ShowSecondText, setShowSecondText] = useState(false);
    const [ShowThirdText, setShowThirdText] = useState(false);

    return (
        <div className=' flex flex-col justify-center'>
            <div className=' h-[160px] flex flex-col justify-center'>
                <p className=' text-[40px] font-[400]  font-[Inter] text-center'>
                    Who do
                </p>
                <p className=' font-[Inter] text-center leading-4  text-[#F35925] text-[45px] font-[500]'>
                    We work  with
                </p>
            </div>
            <div className='bg-cover bg-top bg-no-repeat relative flex flex-wrap justify-around items-center w-full sm:min-h-[74vh] min-h-[90vh] containerImage'>
                <div className=" w-full sm:w-[25%] h-[150px] flex flex-col justify-center items-center mb-4 sm:mb-0 sm:mr-4">
                    <p className=" text-[#fff] text-center font-bold text-[26px] font-[Roboto]">Enterprise Organizations</p>
                    <div onMouseOver={() => setShowFirstText(true)} onMouseOut={() => setShowFirstText(false)} className="  w-full h-[70px]">
                        {ShowFirstText && <p className=" text-child  text-[#fff] p-1 text-center text-[12px]">At 3Const, we thrive on forging strategic partnerships with industry leaders and global enterprises.</p>
                        }</div>
                </div>
                <div className=" w-full sm:w-[25%] flex flex-col justify-center items-center h-[150px] mb-4 sm:mb-0 sm:mx-2">
                    <p className=" text-[#fff] text-center font-bold text-[26px] font-[Roboto]">Enterprise Organizations</p>
                    <div onMouseOver={() => setShowSecondText(true)} onMouseOut={() => setShowSecondText(false)} className="  w-full h-[70px]">
                        {ShowSecondText && <p className=" text-child  text-[#fff] p-1 text-center text-[12px]">At 3Const, we thrive on forging strategic partnerships with industry leaders and global enterprises.</p>
                        }</div>


                </div>
                <div className=" w-full sm:w-[25%] flex flex-col justify-center items-center h-[150px]">
                    <p className=" text-[#fff] text-center font-bold text-[26px] font-[Roboto]">Enterprise Organizations</p>
                    <div onMouseOver={() => setShowThirdText(true)} onMouseOut={() => setShowThirdText(false)} className="  w-full h-[70px]">
                        {ShowThirdText && <p className=" text-child  text-[#fff] p-1 text-center text-[12px]">At 3Const, we thrive on forging strategic partnerships with industry leaders and global enterprises.</p>
                        }</div>
                </div>
            </div>


        </div>
    )
};
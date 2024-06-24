const Footer = () => {
    return (
        <>
            <footer className="pt-3 border-t-4 border-[#000] flex justify-end flex-col items-center">
                <div className="bg-[#121212] rounded-t-lg py-6 w-[80%] flex flex-col md:flex-row justify-around items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <p className="text-[#FEF5E3] text-[45px] leading-10 font-[Valky] text-center md:text-left mb-4 md:mb-0 animate-pulse">Glow <br /> Scout</p>
                    <div className="flex flex-col md:flex-row justify-around w-full md:w-[60%]">
                        <ul className="font-medium mb-4 md:mb-0">
                            <li className="mb-4 leading-6">
                                <p className="text-[22px] font-bold text-[#EFE4D1] font-[Raleway] text-center md:text-left">Quick Links</p>
                            </li>
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">Home</p>
                            </li>
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">Treatments</p>
                            </li>
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">Spas</p>
                            </li>
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">Blog</p>
                            </li>
                        </ul>
                        <ul className="font-medium mb-4 md:mb-0">
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">Privacy Policy</p>
                            </li>
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">Terms & Conditions</p>
                            </li>
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">About us</p>
                            </li>
                        </ul>
                        <ul className="font-medium">
                            <li className="mb-4 leading-6">
                                <p className="text-[22px] font-bold text-[#EFE4D1] font-[Raleway] text-center md:text-left">Follow Us</p>
                            </li>
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">Instagram</p>
                            </li>
                            <li className="mb-4 hover:underline leading-5 transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">Facebook</p>
                            </li>
                            <li className="mb-4 leading-5 hover:underline transition duration-300 ease-in-out hover:text-[#f0c674]">
                                <p className="text-center text-[#EFE4D1] font-[Raleway] cursor-pointer">YouTube</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;

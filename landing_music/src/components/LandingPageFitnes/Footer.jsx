import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container relative">
      <hr className="border-[1px] border-lightgray" />
      <div className="footer py-[1rem] px-[2rem] flex flex-col gap-[4rem] items-center justify-center h-[20rem]">
        <div className="social-links flex gap-[4rem]">
          <FaGithub className="text-[2rem] cursor-pointer text-white" />
          <FaInstagram className="text-[2rem] cursor-pointer text-white" />
          <FaLinkedinIn className="text-[2rem] cursor-pointer text-white" />
        </div>
        <div className="logo-f w-[10rem]">
          <img
            src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/logo.png"
            alt="logo"
          />
        </div>
      </div>
      {/* background orange */}
      <div className="back-blur w-[26rem] h-[12rem] bottom-0 right-[15%]"></div>
      <div className="back-blur w-[26rem] h-[12rem] bottom-0 left-[15%]"></div>
    </div>
  );
};

export default Footer;

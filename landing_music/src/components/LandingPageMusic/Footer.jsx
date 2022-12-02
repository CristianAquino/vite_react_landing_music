import CenterMenu from "./CenterMenu";
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const socialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[54rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={socialStyle}>
          <FaFacebookSquare />
        </div>
        <div className={socialStyle}>
          <FaTwitter />
        </div>
        <div className={socialStyle}>
          <FaYoutube />
        </div>
        <div className={socialStyle}>
          <FaLinkedin />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda
        at quam minus, perspiciatis recusandae.
      </span>
    </div>
  );
};

export default Footer;

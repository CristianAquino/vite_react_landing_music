import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

const Search = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/backgraphics.png"
          alt="backgraphics"
          className="absolute top-[22rem] left-[-47rem]"
        />
        <motion.img
          src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/d1.png"
          alt="d1"
          className="w-[16rem] top-[26rem] absolute"
        />
        <motion.img
          src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/d2.png"
          alt="d2"
          className="w-[9rem] top-[32.7rem] left-[7rem] absolute"
        />
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/d3.png"
          alt="d3"
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/d4.png"
          alt="d4"
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* search */}
        <div className="searchBar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* search icon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/search.png"
              alt="searchIcon"
              className="w-[1.5rem]"
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/Path%20318.png"
            alt="path318"
            className="w-[5rem]"
          />
        </div>
        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4d586a]">
            Lorem ipsum dolor, sit amet consectetur
            <br /> adipisicing elit. Corrupti officia <br />
            aut nemo animi magni similique!
          </span>
        </div>
        {/* Music player */}
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Search;

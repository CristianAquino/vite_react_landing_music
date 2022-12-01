import { useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const Hero = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Experience The</span>
          <span>
            <b>Best Quality Music</b>
          </span>
          <span className="text-[15px] text-[#525d6e]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            voluptates!
            <br />
            Suspendisse in leo non risus tincidunt lobortis.
          </span>
          {/* download ads */}
          <div>
            <span className="text-[13px]">
              Download now on IOS and Android{" "}
            </span>
            <DownloadAds />
          </div>
        </div>
        {/* ride side */}
        <div className="images relative w-[50%]">
          <motion.img
            transition={{ duration: 1, type: "ease-out" }}
            variants={bg}
            animate={`${elementIsVisible}`}
            src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/backgraphics.png"
            alt="backgraphics"
            className="absolute top-[-8rem] left-[19rem]"
          />
          <img
            src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/p%201.png"
            alt="p1"
            className="absolute top-[-15rem] left-[13rem] h-[34rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/p%202.png"
            alt="p2"
            className="absolute w-[175px] top-[94px] left-[235px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/p%203.png"
            alt="p3"
            className="absolute w-[5rem]  top-[12rem] left-[13rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/p%204.png"
            alt="p4"
            className="absolute w-[5rem] top-[12rem] left-[12.5rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Hero;

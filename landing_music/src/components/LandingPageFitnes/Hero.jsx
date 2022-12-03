import { FaHeart } from "react-icons/fa";
import Header from "./Header";
import { motion } from "framer-motion";

const Hero = () => {
  const divSty = "flex flex-col";
  const spanOne = "text-white text-[2rem]";
  const spanTwo = "text-gray uppercase";
  const btnSty =
    "flex items-center justify-center p-2 font-bold border-[4px] border-transparent w-32 hover:cursor-pointer";

  const transition = {
    type: "spring",
    duration: 3,
  };

  return (
    <div className="hero flex justify-between" id="home">
      {/* background orange */}
      <div className="back-blur w-[25rem] h-[35rem] left-0"></div>
      <div className="left-h p-12 pt-6 flex-[3] flex gap-8 flex-col">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad mt-16 bg-[#363d42] rounded-[4rem] w-[fit-content] px-[13px] py-[20px] uppercase text-white relative flex items-center justify-start">
          <motion.div
            initial={{ left: "208px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
            className="absolute bg-orange w-[5.4rem] h-[80%] left-[8px] rounded-[3rem] z-[1]"
          ></motion.div>
          <span className="z-[2]">the best fitness club in the town</span>
        </div>
        <div className="hero-text flex flex-col gap-6 uppercase text-[4.5rem] font-bold text-white ">
          <div>
            <span className="stroke-text text-transparent">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="text-[1rem] font-[200] tracking-[1px] w-[80%]">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quae voluptatum magnam molestias illo cumque est architecto,
              libero recusandae fugit!
            </span>
          </div>
        </div>
        <div className="flex gap-8">
          <div className={divSty}>
            <span className={spanOne}>+140</span>
            <span className={spanTwo}>expert coachs</span>
          </div>
          <div className={divSty}>
            <span className={spanOne}>+978</span>
            <span className={spanTwo}>members joined</span>
          </div>
          <div className={divSty}>
            <span className={spanOne}>+50</span>
            <span className={spanTwo}>fitness programs</span>
          </div>
        </div>
        {/* buttons */}
        <div className="flex gap-4 font-normal">
          <button className={btnSty + `  bg-orange text-white `}>
            Get Started
          </button>
          <button
            className={
              btnSty + ` bg-transparent border-[2px] border-orange text-white `
            }
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="right-h flex-1 relative bg-orange">
        <button
          className={
            btnSty + ` bg-white absolute right-[3rem] top-[2rem] text-black`
          }
        >
          Join now
        </button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate flex flex-col gap-4 bg-darkGrey w-[fit-content] p-4 items-start rounded-[5px] absolute right-16 top-28"
        >
          <FaHeart className="text-[3rem] text-red-600" />
          <span className="text-gray">Heart Rate</span>
          <span className="text-white text-[1.5rem]">116 bpm</span>
        </motion.div>
        <img
          src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/hero_image.png"
          alt="hero_image"
          className="absolute top-[9rem] right-48 w-[26rem] max-w-none"
        />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "27rem" }}
          transition={transition}
          src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/hero_image_back.png"
          alt="hero_back"
          className="absolute top-[6rem] right-[27rem] z-[-1] w-[14rem] "
        />
        {/* calories */}
        <motion.div
          initial={{ right: "28rem" }}
          whileInView={{ right: "36rem" }}
          transition={transition}
          className="calories flex gap-[2rem] bg-caloryCard rounded-[5px] p-[1rem] w-[14rem] absolute top-[37rem] right-[36rem]"
        >
          <img
            src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/calories.png"
            alt="calories"
            className="w-[3rem] max-w-none"
          />
          <div className="flex flex-col justify-between">
            <span className="text-gray">Calories Burned</span>
            <span className="text-white text-[1.5rem]">220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

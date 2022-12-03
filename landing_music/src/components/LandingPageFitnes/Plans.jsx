import { FaArrowRight } from "react-icons/fa";
import { TbHeartbeat } from "react-icons/tb";

const Plans = () => {
  return (
    <div
      className="plan-container mt-[-4rem] py-[0] px-[2rem] flex flex-col gap-[4rem] relative"
      id="plans"
    >
      {/* background orange */}
      <div className="back-blur w-[32rem] h-[23rem] left-0 top-[6rem]"></div>
      <div className="back-blur w-[32rem] h-[23rem] right-0 top-[10rem]"></div>
      <div className="flex font-bold text-[3rem] justify-center text-white uppercase gap-[2rem]">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      <div className="plans flex items-center justify-center gap-[3rem]">
        <div className="plan flex flex-col bg-caloryCard text-white gap-[2rem] p-[1.5rem] w-[15rem]">
          <TbHeartbeat className="text-[2rem] text-orange" />
          <span className="text-[1rem] font-bold">BASIC PLAN</span>
          <span className="text-[3rem] font-bold">$ 25</span>
          <div className="features flex flex-col gap-[1rem]">
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>2 hours of excercises</span>
            </div>
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>Free consultaion to coaches</span>
            </div>
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>Access to The Community</span>
            </div>
          </div>
          <div className="text-[0.8rem]">
            <span className="flex gap-[1rem] items-center">
              See more benefits <FaArrowRight className="text-[0.8rem]" />
            </span>
          </div>
          <button className="flex items-center justify-center p-2 font-bold border-[4px] border-transparent w-[100%] hover:cursor-pointer bg-white text-black">
            Join now
          </button>
        </div>
        <div className="plan flex flex-col bg-planCard text-white gap-[2rem] p-[1.5rem] w-[15rem] scale-[1.1]">
          <TbHeartbeat className="text-[2rem] text-white" />
          <span className="text-[1rem] font-bold">BASIC PLAN</span>
          <span className="text-[3rem] font-bold">$ 25</span>
          <div className="features flex flex-col gap-[1rem]">
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>2 hours of excercises</span>
            </div>
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>Free consultaion to coaches</span>
            </div>
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>Access to The Community</span>
            </div>
          </div>
          <div className="text-[0.8rem]">
            <span className="flex gap-[1rem] items-center">
              See more benefits <FaArrowRight className="text-[0.8rem]" />
            </span>
          </div>
          <button className="flex items-center justify-center p-2 font-bold border-[4px] border-transparent w-[100%] hover:cursor-pointer bg-white text-orange">
            Join now
          </button>
        </div>
        <div className="plan flex flex-col bg-caloryCard text-white gap-[2rem] p-[1.5rem] w-[15rem]">
          <TbHeartbeat className="text-[2rem] text-orange" />
          <span className="text-[1rem] font-bold">BASIC PLAN</span>
          <span className="text-[3rem] font-bold">$ 25</span>
          <div className="features flex flex-col gap-[1rem]">
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>2 hours of excercises</span>
            </div>
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>Free consultaion to coaches</span>
            </div>
            <div className="feature flex items-center gap-[1rem]">
              <img
                src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/whiteTick.png"
                alt="whiteTick"
                className="w-[1rem]"
              />
              <span>Access to The Community</span>
            </div>
          </div>
          <div className="text-[0.8rem]">
            <span className="flex gap-[1rem] items-center">
              See more benefits <FaArrowRight className="text-[0.8rem]" />
            </span>
          </div>
          <button className="flex items-center justify-center p-2 font-bold border-[4px] border-transparent w-[100%] hover:cursor-pointer bg-white text-black">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;

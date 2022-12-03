import { BiDumbbell, BiRun } from "react-icons/bi";
import { TbHeartbeat } from "react-icons/tb";
import { AiFillFire } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const Programs = () => {
  return (
    <div
      className="programs flex flex-col gap-[2rem] py-0 px-[2rem]"
      id="programs"
    >
      <div className="programs-header flex gap-[5rem] font-bold text-[3rem] justify-center text-white uppercase italic ">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-category flex gap-[1rem]">
        <div className="category flex flex-col bg-darkGrey p-[2rem] gap-[1rem] text-white justify-between hover:bg-planCard hover:cursor-pointer">
          <BiDumbbell className="text-[2rem]" />
          <span className="text-[1rem] font-bold">Strength Training</span>
          <span className="text-[0.9rem] leading-[25px]">
            In this program, you are trained to improve your strength through
            many exercises.
          </span>
          <div className="join-now flex items-center gap-[2rem]">
            <span>Join Now</span>
            <FaArrowRight className="text-[1rem]" />
          </div>
        </div>
        <div className="category flex flex-col bg-darkGrey p-[2rem] gap-[1rem] text-white justify-between hover:bg-planCard hover:cursor-pointer">
          <BiRun className="text-[2rem]" />
          <span className="text-[1rem] font-bold">Strength Training</span>
          <span className="text-[0.9rem] leading-[25px]">
            In this program, you are trained to improve your strength through
            many exercises.
          </span>
          <div className="join-now flex items-center gap-[2rem]">
            <span>Join Now</span>
            <FaArrowRight className="text-[1rem]" />
          </div>
        </div>
        <div className="category flex flex-col bg-darkGrey p-[2rem] gap-[1rem] text-white justify-between hover:bg-planCard hover:cursor-pointer">
          <AiFillFire className="text-[2rem]" />
          <span className="text-[1rem] font-bold">Strength Training</span>
          <span className="text-[0.9rem] leading-[25px]">
            In this program, you are trained to improve your strength through
            many exercises.
          </span>
          <div className="join-now flex items-center gap-[2rem]">
            <span>Join Now</span>
            <FaArrowRight className="text-[1rem]" />
          </div>
        </div>
        <div className="category flex flex-col bg-darkGrey p-[2rem] gap-[1rem] text-white justify-between hover:bg-planCard hover:cursor-pointer">
          <TbHeartbeat className="text-[2rem]" />
          <span className="text-[1rem] font-bold">Strength Training</span>
          <span className="text-[0.9rem] leading-[25px]">
            In this program, you are trained to improve your strength through
            many exercises.
          </span>
          <div className="join-now flex items-center gap-[2rem]">
            <span>Join Now</span>
            <FaArrowRight className="text-[1rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

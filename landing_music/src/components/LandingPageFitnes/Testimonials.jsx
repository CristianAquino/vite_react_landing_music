import { testimonialsData } from "../../utils/testimonialsData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import useLeftRight from "../../hooks/useLeftRight";

const Testimonials = () => {
  const tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };
  const [selected, handleLeft, handleRight] = useLeftRight(tLength);

  return (
    <div
      className="testimonial flex gap-[1rem] px-[2rem] py-0"
      id="testimonials"
    >
      <div className="left-t flex flex-1 gap-[2rem] flex-col uppercase text-white">
        <span className="text-orange font-bold">Testimonials</span>
        <span className="stroke-text font-bold text-[3rem]">What they</span>
        <span className="font-bold text-[3rem]">say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="text-justify tracking-[2px] leading-[40px] capitalize"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="text-orange">{testimonialsData[selected].name}</span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t flex-1 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-[17rem] h-[20rem] border-[2px] border-orange bg-transparent right-[9rem] top-[0.9rem]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-[17rem] h-[19rem] top-[4rem] bg-planCard right-[7rem]"
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
          className="absolute w-[17rem] h-[20rem] object-cover right-[8rem] top-[2rem]"
        />
        <div className="arrows flex gap-[1rem] absolute bottom-[1rem] left-[3rem]">
          <FaArrowLeft
            className="text-[2rem] cursor-pointer text-white"
            onClick={handleLeft}
          />
          <FaArrowRight
            className="text-[2rem] cursor-pointer text-white"
            onClick={handleRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

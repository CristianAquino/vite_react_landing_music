import { motion } from "framer-motion";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Feature = ({ icon, title }) => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      // minTopValue={100}
    >
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img src={icon} alt={title} className="w-[3rem]" />
        </motion.div>
        <span className="mt-5">{title}</span>
        <span className="text-[#707070] mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus
          voluptates fuga? Dicta, quidem fugiat!
        </span>
        <span className="text-[#e600ff] underline mt-[3rem] hover:cursor-pointer">
          Learn more
        </span>
      </div>
    </VisibilitySensor>
  );
};

export default Feature;

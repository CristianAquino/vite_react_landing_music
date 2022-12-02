import features from "../../utils/dataFeatures";
import Feature from "./Feature";

const Experience = () => {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img
        src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/Path%20318.png"
        alt="path318"
        className="w-[5rem]"
      />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span className="capitalize">
          An amazing app can change your daily life
        </span>
        <span>
          <b>Music Experince</b>
        </span>
      </div>
      {/* features */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        {features.map((feature) => (
          <Feature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;

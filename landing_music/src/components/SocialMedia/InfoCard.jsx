import { RiPencilLine } from "react-icons/ri";

const InfoCard = () => {
  return (
    //   infoCard
    <div className="flex flex-col gap-[0.75rem] bg-cardColor p-[1rem] rounded-[1rem] w-[90%]">
      {/* infoHead */}
      <div className="flex justify-between items-center">
        <h4>Your Info</h4>
        <RiPencilLine className="text-[24px] hover:cursor-pointer" />
      </div>
      {/* info */}
      <div>
        <span>
          <b>Status</b>
        </span>
        <span> in Relationship</span>
      </div>
      {/* info */}
      <div>
        <span>
          <b>Lives</b>
        </span>
        <span> Multan</span>
      </div>
      {/* info */}
      <div>
        <span>
          <b>Works at</b>
        </span>
        <span> Zainkeepscode inst</span>
      </div>
      <button className="flex items-center justify-center self-end text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] w-[7rem] mt-[6rem] hover:cursor-pointer ">
        Logout
      </button>
    </div>
  );
};

export default InfoCard;

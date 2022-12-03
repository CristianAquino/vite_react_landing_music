const Join = () => {
  return (
    <div className="join flex px-[2rem] py-0 gap-[10rem]" id="join-us">
      <div className="left-j text-white text-[3rem] font-bold uppercase relative">
        <hr className="absolute w-[10.5rem] border-[2px] border-orange rounded-[20%]" />
        <div className="flex gap-[1rem]">
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div className="flex gap-[1rem]">
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j flex justify-center items-end">
        <form className="flex gap-[3rem] bg-gray py-[1rem] px-[2rem] ">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
            className="bg-transparent border-none outline-none text-lightgray placeholder:text-lightgray"
          />
          <button className="flex items-center justify-center p-2 font-bold border-[4px] border-transparent w-[100%] hover:cursor-pointer bg-orange text-white">
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;

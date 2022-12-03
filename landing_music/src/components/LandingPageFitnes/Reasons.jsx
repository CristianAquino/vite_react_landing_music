const Reasons = () => {
  return (
    <div className="reasons px-[2rem] py-0 flex gap-[2rem]" id="reasons">
      <div className="reason-left flex-1 grid grid-cols-3 gap-[1rem] auto-rows-[14rem]">
        <img
          src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/image1.png"
          alt="image1"
          className="object-cover w-[100%] h-[100%] row-[1_/_3]"
        />
        <img
          src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/image2.png"
          alt="image2"
          className="w-[100%] h-[100%] col-[2_/_4] object-cover"
        />
        <img
          src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/image3.png"
          alt="image3"
          className="w-[100%] h-[100%] col-[2_/_3] row-[2] object-cover"
        />
        <img
          src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/image4.png"
          alt="image4"
          className=" object-cover w-[100%] h-[100%] row-[2] col-[3_/_4]"
        />
      </div>
      <div className="reason-right flex-1 uppercase gap-[1rem] flex flex-col  ">
        <span className=" font-bold text-orange">some reasons</span>
        <div className="text-white text-[3rem] font-bold">
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-r flex flex-col gap-[1rem] text-white font-bold">
          <div className="flex text-[1rem] gap-[1rem] ">
            <img
              src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/tick.png"
              alt="tick"
              className="w-[2rem] h-[2rem]"
            />
            <span className="upper">over 140+ expert coachs</span>
          </div>
          <div className="flex text-[1rem] gap-[1rem]">
            <img
              src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/tick.png"
              alt="tick"
              className="w-[2rem] h-[2rem]"
            />
            <span className="upper">train smarter and faster than before</span>
          </div>
          <div className="flex text-[1rem] gap-[1rem]">
            <img
              src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/tick.png"
              alt="tick"
              className="w-[2rem] h-[2rem]"
            />
            <span className="upper">1 free program for new member</span>
          </div>
          <div className="flex text-[1rem] gap-[1rem]">
            <img
              src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/tick.png"
              alt="tick"
              className="w-[2rem] h-[2rem]"
            />
            <span className="upper">reliable partners</span>
          </div>
        </div>
        <span className="upper text-gray font-normal">our partners</span>
        <div className="partnerts flex gap-[1rem]">
          <img
            src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/nb.png"
            alt="nb"
            className="w-[2.5rem]"
          />
          <img
            src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/adidas.png"
            alt="adidas"
            className="w-[2.5rem]"
          />
          <img
            src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/nike.png"
            alt="nike"
            className="w-[2.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Reasons;

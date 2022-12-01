import CenterMenu from "./CenterMenu";

const Header = () => {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232a4e] px-[25px] py-[7px]";
  return (
    <div className="header flex bg-[#081730] items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      {/* logo */}
      <img
        src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/MuzicLogo.png"
        alt="logo"
        className="logo w-[42px] h-[42px]"
      />
      {/* menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex">
        <button className={`mr-[35px] hover:bg-[#232a4e] ` + buttonStyle}>
          Sign up
        </button>
        <button className={`hover:bg-[#232a4e] ` + buttonStyle}>Log in</button>
      </div>
    </div>
  );
};

export default Header;

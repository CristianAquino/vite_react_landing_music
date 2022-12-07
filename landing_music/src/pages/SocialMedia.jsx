import Auth from "../components/SocialMedia/Auth";
import Home from "../components/SocialMedia/Home";
import Profile from "../components/SocialMedia/Profile";

const SocialMedia = () => {
  const divStySocial =
    "absolute w-[22rem] h-[14rem] rounded-[50%] bg-[#a6ddf0] blur-[72px]";
  return (
    // socialMedia
    <div className="overflow-hidden text-black bg-[#f3f3f3] p-[1rem]">
      <div className={divStySocial + " top-[-18%] right-0"}></div>
      <div className={divStySocial + " top-[36%] left-[-8rem]"}></div>
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
};

export default SocialMedia;

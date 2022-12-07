import PostSide from "./PostSide";
import ProfileSide from "./ProfileSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    // home
    <div className="relative grid grid-cols-[18rem_auto_20rem] gap-[1rem]">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;

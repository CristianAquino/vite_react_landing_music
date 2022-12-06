import PostSide from "./PostSide";
import ProfileCard from "./ProfileCard";
import ProfileLeft from "./ProfileLeft";
import RightSide from "./RightSide";

const Profile = () => {
  return (
    //   profile
    <div className="relative grid grid-cols-[18rem_auto_20rem] gap-[1rem]">
      <ProfileLeft />
      {/* profile Center */}
      <div className="flex flex-col gap-[1rem]">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;

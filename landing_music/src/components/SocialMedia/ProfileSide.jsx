import FollowersCard from "./FollowersCard";
import Logo from "./Logo";
import ProfileCard from "./ProfileCard";

const ProfileSide = () => {
  return (
    // profileSide overflow-auto
    <div className="flex flex-col gap-[1rem] items-center">
      <Logo />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;

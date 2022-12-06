import FollowersCard from "./FollowersCard";
import InfoCard from "./InfoCard";
import Logo from "./Logo";

const ProfileLeft = () => {
  return (
    // profileLeft overflow-auto
    <div className="flex flex-col gap-[1rem] items-center">
      <Logo />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;

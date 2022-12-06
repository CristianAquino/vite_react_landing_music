import Posts from "./Posts";
import PostShare from "./PostShare";

const PostSide = () => {
  return (
    // postSide
    <div className="flex flex-col gap-[1rem] h-[100vh] overflow-auto none-scroll">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;

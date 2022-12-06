import { useRef } from "react";
import { useState } from "react";
import {
  AiOutlinePicture,
  AiOutlinePlayCircle,
  AiOutlineEnvironment,
  AiOutlineCalendar,
  AiFillCloseSquare,
} from "react-icons/ai";

const PostShare = () => {
  const optionSty =
    "p-[5px] px-[10px] rounded-[10px] flex items-center justify-center text-[12px] text-[16px] hover:cursor-pointer";

  const [image, setImage] = useState(null);
  const imgRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    //   postShare
    <div className="flex gap-[1rem] bg-cardColor p-[1rem] rounded-[1rem]">
      <img
        src="https://raw.githubusercontent.com/ZainRk/SocialMedia-Starter/master/src/img/profileImg.jpg"
        alt="profileImg"
        className="rounded-[50%] w-[3rem] h-[3rem]"
      />
      <div className="flex flex-col w-[90%] gap-[1rem]">
        <input
          type="text"
          placeholder="What' happning"
          className="bg-inputColor rounded-[10px] p-[10px] text-[18px] border-none outline-none"
        />
        {/* postOption */}
        <div className="flex justify-around">
          {/* option */}
          <div
            className={optionSty + " text-photo"}
            onClick={() => imgRef.current.click()}
          >
            <AiOutlinePicture /> Photo
          </div>
          {/* option */}
          <div className={optionSty + " text-video"}>
            <AiOutlinePlayCircle /> Video
          </div>
          {/* option */}
          <div className={optionSty + " text-location"}>
            <AiOutlineEnvironment /> Location
          </div>
          {/* option */}
          <div className={optionSty + " text-shedule"}>
            <AiOutlineCalendar /> Shedule
          </div>
          {/* button */}
          <button className="flex items-center justify-center text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] hover:cursor-pointer ">
            Share
          </button>
          {/* input img */}
          <div className="hidden">
            <input
              type="file"
              name="myImage"
              ref={imgRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          // preview image
          <div className="relative max-h-[20rem] overflow-hidden overflow-y-scroll">
            <AiFillCloseSquare
              className="text-[24px] text-gray absolute right-[1rem] top-[0.5rem] cursor-pointer font-bold"
              onClick={() => setImage(null)}
            />
            <img
              src={image?.image}
              alt="image"
              className="w-[100%]  object-cover rounded-[0.5rem]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;

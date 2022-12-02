const DownloadAds = () => {
  const downloadImgStyle =
    "border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]";
  return (
    <div className="download">
      <div className="download_images flex">
        <img
          src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/App%20Store.png"
          alt="App Store"
          className={downloadImgStyle + ` mr-[2rem]`}
        />
        <img
          src="https://raw.githubusercontent.com/ZainRk/Youtube-Music-App/master/src/img/Google%20Play.png"
          alt="Google Play"
          className={downloadImgStyle}
        />
      </div>
    </div>
  );
};

export default DownloadAds;

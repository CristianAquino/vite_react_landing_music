const CardImage = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="absolute left-0 top-0 w-[100%] h-[100%] object-cover "
    />
  );
};

export default CardImage;

import { Link } from "react-router-dom";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";

const Card = ({ route, image, name }) => {
  return (
    <div className="card w-[400px] h-[300px]">
      <Link to={route}>
        <div className="imgBox relative w-[400px] bg-red-50 rounded-[20px] overflow-hidden aspect-[4/3]">
          <CardImage image={image} alt={name} />
        </div>
        <CardFooter title={"title"} />
      </Link>
    </div>
  );
};

export default Card;

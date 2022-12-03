import { Link } from "react-scroll";

const Header = () => {
  const listSty = "hover:text-orange hover:cursor-pointer";
  return (
    <div className="flex justify-between">
      <img
        src="https://raw.githubusercontent.com/ZainRk/FitClub-Starter/master/src/assets/logo.png"
        alt="logo"
        className="w-40 h-12"
      />
      <ul className="flex list-none gap-8 text-white items-center">
        <li className={listSty}>
          <Link to="home" span={true} smooth={true}>
            Home
          </Link>
        </li>
        <li className={listSty}>
          <Link to="programs" span={true} smooth={true}>
            Programs
          </Link>
        </li>
        <li className={listSty}>
          <Link to="reasons" span={true} smooth={true}>
            Why us
          </Link>
        </li>
        <li className={listSty}>
          <Link to="plans" span={true} smooth={true}>
            Plans
          </Link>
        </li>
        <li className={listSty}>
          <Link to="testimonials" span={true} smooth={true}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

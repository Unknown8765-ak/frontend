import { Link } from "react-router-dom";
import { navLink } from "./navLink";

const NavLinks = ({ mobile = false, setOpen }) => {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-6 text-lg font-medium"
          : "flex items-center gap-8"
      }
    >
      {navLink.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            onClick={() => mobile && setOpen(false)}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
// components/common/Navbar/NavLinks.jsx

import { NavLink } from "react-router-dom";
import { navLink } from "./navLink";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-8">
      {navLink.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-semibold"
                : "text-gray-700 hover:text-yellow-500 transition-all"
            }
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
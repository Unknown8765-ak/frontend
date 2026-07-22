// components/common/Navbar/Logo.jsx

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <h1 className="text-2xl font-bold">
        Sun<span className="text-yellow-500"> & </span>Shadow
      </h1>
    </Link>
  );
};

export default Logo;
// components/common/Navbar/Navbar.jsx

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavLinks />
        </div>

        {/* CTA Button */}
        {/* <button
          className="
            hidden
            lg:block
            bg-yellow-500
            hover:bg-yellow-600
            text-white
            px-5
            py-2
            rounded-lg
            transition-all
          "
        >
          Consult an Expert
        </button> */}

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
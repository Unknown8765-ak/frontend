import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </header>
  );
};

export default Navbar;
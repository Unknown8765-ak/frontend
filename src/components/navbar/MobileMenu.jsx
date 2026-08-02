import { X } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl transition-transform duration-300 z-50 lg:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-5">
        <button onClick={() => setOpen(false)}>
          <X size={28} />
        </button>
      </div>

      <div className="px-6">
        <NavLinks mobile setOpen={setOpen} />
      </div>
    </div>
  );
};

export default MobileMenu;
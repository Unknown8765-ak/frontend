// import { X } from "lucide-react";
// import NavLinks from "./NavLinks";

// const MobileMenu = ({ open, setOpen }) => {
//   return (
//     <div
//       className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl transition-transform duration-300 z-50 lg:hidden ${
//         open ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div className="flex justify-end p-5">
//         <button onClick={() => setOpen(false)}>
//           <X size={28} />
//         </button>
//       </div>

//       <div className="px-6">
//         <NavLinks mobile setOpen={setOpen} />
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;


import { X, Building2, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-80 bg-white transition-transform duration-300 ease-in-out shadow-2xl z-50 lg:hidden flex flex-col ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <Logo />

        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <NavLinks mobile setOpen={setOpen} />
      </div>

      {/* Footer */}
      <div className="border-t p-6 bg-gray-50">
        <div className="rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white p-5 shadow-lg">

          <div className="flex items-center gap-3 mb-3">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <Building2 size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Sun & Shadow
              </h3>

              <p className="text-sm text-white/80">
                Solar • Aquarium • Digital Agency
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@sunandshadow.in</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-5">
          © 2026 Sun & Shadow. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
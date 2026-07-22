import { Link } from "react-router-dom";

import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
          grid
          md:grid-cols-2
          lg:grid-cols-5
          gap-10
        "
      >
        {/* Company */}

        <div className="lg:col-span-2">

          <Link
            to="/"
            className="text-3xl font-bold"
          >
            Sun
            <span className="text-yellow-500">
              {" "}
              &{" "}
            </span>
            Shadow
          </Link>

          <p className="mt-6 text-gray-300 leading-7">

            Sun & Shadow Group provides Renewable Energy,
            Aquarium Solutions and Digital Marketing
            services across India.

          </p>

        </div>

        {/* Links */}

        <FooterLinks />

        {/* Contact */}

        <FooterContact />

        {/* Social */}

        <FooterSocial />

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-3
          "
        >
          <p className="text-gray-400 text-sm">

            © {new Date().getFullYear()} Sun & Shadow Group.
            All Rights Reserved.

          </p>

          <div className="flex gap-5 text-sm">

            <Link
              to="/privacy-policy"
              className="hover:text-yellow-500"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-yellow-500"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
import { NavLink } from "react-router-dom";
import { quickLinks, services } from "./footerData";

const FooterLinks = () => {
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="hover:text-yellow-400 transition"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-5">
          Services
        </h3>

        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service.id}>
              <NavLink
                to={service.path}
                className="hover:text-yellow-400 transition"
              >
                {service.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
import {
  FaTachometerAlt,
  FaGlobe,
  FaUsers,
  FaImages,
  FaUserFriends,
  FaStar,
  FaCog,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../auth/authSlice";
import { logoutUserAPI } from "../../services/auth/auth";

import { NavLink } from "react-router-dom";

  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      title: "Website Content",
      path: "/admin/website-content",
      icon: <FaGlobe />,
    },
    {
      title: "Leads",
      path: "/admin/leads",
      icon: <FaUsers />,
    },
    {
      title: "Gallery",
      path: "/admin/gallery",
      icon: <FaImages />,
    },
    {
      title: "Testimonials",
      path: "/admin/testimonials",
      icon: <FaStar />,
    },
    {
      title: "Settings",
      path: "/admin/settings",
      icon: <FaCog />,
    },
    {
      title: "Profile",
      path: "/admin/profile",
      icon: <FaUserCircle />,
    },
  ];

const Sidebar = () => {

  const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogout = async () => {
  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (!confirmLogout) return;

  try {
    await logoutUserAPI();

    dispatch(logout());

    navigate("/admin/login", {
      // replace: true,
    });

  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};


  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">


      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold">
          Admin Panel
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Company Management
        </p>
      </div>


      <nav className="flex-1 py-6">

        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span>{item.title}</span>
          </NavLink>
        ))}

      </nav>


      <div className="border-t border-slate-700 p-5">

        <button
  onClick={handleLogout}
  className="flex items-center gap-3 text-red-400 hover:text-red-300"
>
  <FaSignOutAlt />
  Logout
</button>

      </div>

    </aside>
  );
};

export default Sidebar;
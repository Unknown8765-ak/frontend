import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaUsers,
  FaImages,
  FaCog,
  FaStar,
} from "react-icons/fa";

const actions = [
  {
    title: "Manage Website",
    path: "/admin/website-content",
    icon: <FaGlobe />,
    color: "bg-blue-500",
  },
  {
    title: "View Leads",
    path: "/admin/leads",
    icon: <FaUsers />,
    color: "bg-green-500",
  },
  {
    title: "Manage Gallery",
    path: "/admin/gallery",
    icon: <FaImages />,
    color: "bg-purple-500",
  },
  {
    title: "Testimonials",
    path: "/admin/testimonials",
    icon: <FaStar />,
    color: "bg-green-500",
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <FaCog />,
    color: "bg-purple-500",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className="group border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl ${action.color}`}
            >
              {action.icon}
            </div>

            <h3 className="mt-5 text-lg font-semibold group-hover:text-blue-600">
              {action.title}
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              Click here to manage this section.
            </p>
          </Link>
        ))}

      </div>

    </div>
  );
};

export default QuickActions;
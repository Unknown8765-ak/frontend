import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaImages,
  FaStar,
  FaEye,
} from "react-icons/fa";

import { getDashboardData } from "../../../services/dashBoard/dashBoardSecvice";

const StatsCard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await getDashboardData();

      setDashboard(response.data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-xl font-semibold">
        Loading Dashboard...
      </h2>
    );
  }

  const stats = [
    {
      title: "Total Leads",
      value: dashboard.totalLeads,
      icon: <FaEnvelope size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Gallery Images",
      value: dashboard.totalGalleryImages,
      icon: <FaImages size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Testimonials",
      value: dashboard.totalTestimonials,
      icon: <FaStar size={28} />,
      color: "bg-purple-500",
    },
    {
      title: "Visitors",
      value: dashboard.totalVisitors,
      icon: <FaEye size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
        >
          <div>
            <p className="text-gray-500">{item.title}</p>

            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>

          <div
            className={`${item.color} text-white p-4 rounded-xl`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
import { useEffect, useState } from "react";
import {getDashboardData} from "../../../services/dashBoard/dashBoardSecvice"

const RecentLeads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecentLeads = async () => {
    try {
      setLoading(true);

      const response = await getDashboardData();

      setLeads(response.data.recentLeads);
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentLeads();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Leads
      </h2>

      {loading ? (
        <h3 className="text-center py-8">
          Loading...
        </h3>
      ) : leads.length === 0 ? (
        <h3 className="text-center py-8">
          No Leads Found
        </h3>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Name</th>
                <th className="text-left py-3">Email</th>
                <th className="text-left py-3">Service</th>

              </tr>

            </thead>

            <tbody>

              {leads.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-4">{lead.name}</td>

                  <td>{lead.email}</td>

                  <td>{lead.service}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
};

export default RecentLeads;
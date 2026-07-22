import LeadRow from "./LeadRow";
import LeadModal from "./LeadModal";
import { useEffect, useState } from "react";
import {
  getAllLeads,
  deleteLead,
} from "../../../services/lead/leadService";



const LeadTable = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [leads, setLeads] = useState([]);
const [loading, setLoading] = useState(true);

const fetchLeads = async () => {
  try {
    setLoading(true);

    const response = await getAllLeads();

    setLeads(response.data);
  } catch (error) {
    console.log(error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};
 
useEffect(() => {
  fetchLeads();
}, []);

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Delete this lead?"
  );

  if (!confirmDelete) return;

  try {
    await deleteLead(id);

    fetchLeads();
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};


  return (
    <>
      <div className="bg-white rounded-2xl shadow-md p-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Leads
          </h2>
          <input
            type="text"
            placeholder="Search Lead..."
            className="border rounded-lg px-4 py-2 w-72 outline-none focus:border-blue-600"
          />
        </div>
        {loading && (
  <h2 className="text-center text-lg font-semibold mb-4">
    Loading Leads...
  </h2>
)}

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-center">Action</th>
              </tr>

            </thead>

            <tbody>

              {leads.map((lead) => (
  <LeadRow
    key={lead._id}
    lead={lead}
    onView={() => setSelectedLead(lead)}
    onDelete={() => handleDelete(lead._id)}
  />
))}

            </tbody>

          </table>

        </div>

      </div>

      {selectedLead && (
        <LeadModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </>
  );
};
export default LeadTable;
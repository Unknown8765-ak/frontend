import AdminLayout from "../../layouts/AdminLayout";

import StatsCard from "../../components/admin/DashBoard/StatsCard";
import RecentLeads from "../../components/admin/DashBoard/QuickActions";
import QuickActions from "../../components/admin/DashBoard/RecentLeads";

const Dashboard = () => {
  return (
    <>
      <StatsCard />
      <RecentLeads />
      <QuickActions />
    </>
  );
};

export default Dashboard;
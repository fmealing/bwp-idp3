import AuthGuard from "@/components/auth/AuthGuard";
import DashboardPage from "./Dashboard";

const Dashboard = () => {
  return (
    <AuthGuard>
      <DashboardPage />
    </AuthGuard>
  );
};

export default Dashboard;

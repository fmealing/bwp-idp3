import AuthGuard from "@/components/auth/AuthGuard";
import AlertsPage from "./Alerts";

const Alerts = () => {
  return (
    <AuthGuard>
      <AlertsPage />
    </AuthGuard>
  );
};

export default Alerts;

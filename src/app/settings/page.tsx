import AuthGuard from "@/components/auth/AuthGuard";
import SettingsPage from "./Settings";

const Alerts = () => {
  return (
    <AuthGuard>
      <SettingsPage />
    </AuthGuard>
  );
};

export default Alerts;

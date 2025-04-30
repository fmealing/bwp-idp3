import { AlertTriangle, BadgeCheck } from "lucide-react";
import StatCard from "./StatCard";

interface WeightStatsProps {
  weeklyHigh: string;
  weeklyLow: string;
  healthStatus: "Healthy" | "Check Needed";
}

const WeightStats: React.FC<WeightStatsProps> = ({
  weeklyHigh,
  weeklyLow,
  healthStatus,
}) => {
  const healthIcon =
    healthStatus === "Healthy" ? (
      <BadgeCheck className="text-success w-4 h-4" />
    ) : (
      <AlertTriangle className="text-alert w-4 h-4" />
    );

  const healthClass =
    healthStatus === "Healthy" ? "text-success" : "text-alert";

  return (
    <div className="mt-4 flex justify-between">
      <StatCard label="Weekly High" value={weeklyHigh} className="text-alert" />
      <StatCard
        label="Weekly Low"
        value={weeklyLow}
        className="text-green-600"
      />
      <StatCard
        label="Health Indication"
        value={healthStatus}
        icon={healthIcon}
        className={healthClass}
      />
    </div>
  );
};

export default WeightStats;

import { AlertTriangle, BadgeCheck } from "lucide-react";
import StatCard from "./StatCard";

interface EnergyStatsProps {
  highestUsageLabel: string;
  heatLossAlert: "High" | "Normal";
  highestEnergy: string;
}

const EnergyStats: React.FC<EnergyStatsProps> = ({
  highestUsageLabel,
  heatLossAlert,
  highestEnergy,
}) => {
  const heatLossIcon =
    heatLossAlert === "High" ? (
      <AlertTriangle className="w-4 h-4 text-warning" />
    ) : (
      <BadgeCheck className="w-4 h-4 text-green-600" />
    );

  const heatLossClass =
    heatLossAlert === "High" ? "text-warning" : "text-green-600";

  return (
    <div className="mt-4 flex justify-between">
      <StatCard
        label="Highest Usage"
        value={highestUsageLabel}
        className="text-alert"
      />
      <StatCard
        label="Heat Loss Alert"
        value={heatLossAlert}
        icon={heatLossIcon}
        className={heatLossClass}
      />
      <StatCard
        label="Energy Usage"
        value={highestEnergy}
        className="text-alert"
      />
    </div>
  );
};

export default EnergyStats;

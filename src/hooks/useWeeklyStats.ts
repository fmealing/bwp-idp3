import { useMemo } from "react";

type Reading = {
  created_at: string;
  weight: number;
  energy_usage: number;
  enclosure_id?: number | null;
};

type WeeklyStats = {
  weeklyHigh: string;
  weeklyLow: string;
  healthStatus: "Healthy" | "Check Needed";
  highestEnergy: string;
  heatLossAlert: "High" | "Normal";
  highestUsageLabel: string;
};

export const useWeeklyStats = (readings: Reading[]): WeeklyStats => {
  return useMemo(() => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const weeklyReadings = readings.filter(
      (r) => new Date(r.created_at) >= oneWeekAgo
    );

    // Weight stats
    const weights = weeklyReadings.map((r) => r.weight).filter(Boolean);
    const maxWeight = weights.length ? Math.max(...weights) : null;
    const minWeight = weights.length ? Math.min(...weights) : null;

    const weeklyHigh = maxWeight !== null ? `${maxWeight.toFixed(1)}kg` : "N/A";
    const weeklyLow = minWeight !== null ? `${minWeight.toFixed(1)}kg` : "N/A";

    const healthStatus =
      maxWeight !== null && minWeight !== null && maxWeight - minWeight < 0.5
        ? "Healthy"
        : "Check Needed";

    // Energy stats
    const energy = weeklyReadings.map((r) => r.energy_usage).filter(Boolean);
    const maxEnergy = energy.length ? Math.max(...energy) : null;

    const highestEnergy =
      maxEnergy !== null ? `${maxEnergy.toFixed(1)} kW` : "N/A";

    const heatLossAlert =
      maxEnergy !== null && maxEnergy > 100 ? "High" : "Normal";

    const highestReading =
      maxEnergy !== null
        ? weeklyReadings.find((r) => r.energy_usage === maxEnergy)
        : null;

    const highestUsageLabel = highestReading?.enclosure_id
      ? `Enclosure ${highestReading.enclosure_id}`
      : "Unknown Enclosure";

    return {
      weeklyHigh,
      weeklyLow,
      healthStatus,
      highestEnergy,
      heatLossAlert,
      highestUsageLabel,
    };
  }, [readings]);
};

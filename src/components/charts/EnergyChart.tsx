"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: false },
  },
};

export default function EnergyChart({
  energyUsage,
  labels,
}: {
  energyUsage: number[];
  labels: string[];
}) {
  const data = {
    labels,
    datasets: [
      {
        label: "Energy Usage (kW)",
        data: energyUsage,
        fill: false,
        borderColor: "#DD6B20",
        backgroundColor: "#DD6B20",
        tension: 0.3,
      },
    ],
  };

  return <Line options={options} data={data} />;
}

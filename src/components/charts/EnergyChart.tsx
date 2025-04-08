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

const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
const data = {
  labels,
  datasets: [
    {
      label: "Energy Usage (kW)",
      data: Array.from({ length: 24 }, () =>
        (6.5 + Math.random() * 0.5).toFixed(2)
      ),
      fill: false,
      borderColor: "#DD6B20",
      backgroundColor: "#DD6B20",
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: false },
  },
};

export default function EnergyChart() {
  return <Line options={options} data={data} />;
}

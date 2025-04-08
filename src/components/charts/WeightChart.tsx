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

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const data = {
  labels,
  datasets: [
    {
      label: "Weight (kg)",
      data: [24.1, 24.2, 24.3, 24.0, 24.15, 24.1, 24.25],
      fill: false,
      borderColor: "#38A169",
      backgroundColor: "#38A169",
      tension: 0.4,
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

export default function WeightChart() {
  return <Line options={options} data={data} />;
}

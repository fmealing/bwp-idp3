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

export default function WeightChart({
  weights,
  labels,
}: {
  weights: number[];
  labels: string[];
}) {
  const data = {
    labels,
    datasets: [
      {
        label: "Weight (kg)",
        data: weights,
        fill: false,
        borderColor: "#38A169",
        backgroundColor: "#38A169",
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
}

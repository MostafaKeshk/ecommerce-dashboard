import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut as ChartDoughnut } from "react-chartjs-2";

import { useTheme } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ["Jeans", "T-Shirt"];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
    },
  },
  cutout: 120,
};

type IProps = {
  chartData: any;
};

const Doughnut: React.FC<IProps> = ({ chartData }) => {
  const theme = useTheme();

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
        ],
      },
    ],
  };

  return <ChartDoughnut options={options} data={data} />;
};

export default Doughnut;

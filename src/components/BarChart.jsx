import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const WeightLossBarChart = () => {
  const data = {
    labels: ['Body Fat', 'Progress', 'Calorie Intake'], 
    datasets: [
      {
        label: 'Percentage',
        data: [45, 70, 60], 
        backgroundColor: 'gray',
        borderColor: 'darkgray',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Graph',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        //   text: 'Factors',
        },
      },
      y: {
        title: {
          display: true,
        //   text: 'Percentage (%)',
        },
        min: 0,
        max: 100, 
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeightLossBarChart;

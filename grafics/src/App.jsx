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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const number = [10, 10, 12, 15, 2, 5, 30]

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: number.map((i) => i),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: number.map((i) => i),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: number.map((i) => i),
      backgroundColor: 'rgba(53, 100, 235, 0.5)',
    },
    {
      label: 'Dataset 4',
      data: number.map((i) => i),
      backgroundColor: 'rgba(53, 162, 100, 0.5)',
    },
  ],
};

export function App() {
  return <Bar options={options} data={data} />;
}

export default App
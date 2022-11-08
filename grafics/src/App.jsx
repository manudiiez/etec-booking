import React, { useEffect, useState } from 'react';
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
import useFetch from './hooks/useFetch'

const URI = 'http://localhost:8800/api'


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

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const labels2 = monthNames
const number = [10, 10, 12, 15, 2, 5, 30]
const date = new Date().getMonth()
const labels = [monthNames[date-3], monthNames[date-2], monthNames[date-1], monthNames[date]]
console.log(labels2)

export const data2 = {
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

  const { data, loading, reFetch } = useFetch(`${URI}/chart/`);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      {
        !loading &&
        <Bar options={options} data={{labels: labels, datasets: data}} />
      }
    </div>
  )
}

export default App
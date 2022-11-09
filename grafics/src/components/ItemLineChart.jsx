import React from 'react';
import { Pie } from 'react-chartjs-2';


const labels = ['Informatica', 'Electronica', 'Otros']
const datasets = [
  {
    label: '# of Votes',
    data: [12, 19, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
    ],
    borderWidth: 1,
  },
]
const data2 = {
  labels: ['Informatica', 'Electronica', 'Otros'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const ItemLineChart = ({data, loading}) => {
  return (
    <div>
      {
        loading ? (
          <p>Loading...</p>
        ):(
          <Pie data={{labels: labels, datasets: data}} />
        )
      }
    </div>
  );
}

export default ItemLineChart

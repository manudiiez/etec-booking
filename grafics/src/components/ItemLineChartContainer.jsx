import React from 'react'
import ItemLineChart from './ItemLineChart'
import useFetch from '../hooks/useFetch'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const URI = 'http://localhost:8800/api'


const ItemLineChartContainer = () => {


  const { data, loading, reFetch } = useFetch(`${URI}/chart/booking`);


  return (
    <ItemLineChart data={data} loading={loading} />
  )
}

export default ItemLineChartContainer
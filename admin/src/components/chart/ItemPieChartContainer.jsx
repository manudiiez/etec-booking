import React from 'react'
import ItemPieChart from './ItemPieChart'
import useFetch from '../../hooks/useFetch'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const ItemPieChartContainer = () => {

    const { data, loading, reFetch } = useFetch(`/chart/booking`);


    return (
        <ItemPieChart data={data} loading={loading} />
    )
}

export default ItemPieChartContainer
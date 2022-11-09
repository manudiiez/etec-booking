import React from 'react'
import useFetch from '../hooks/useFetch'
import ItemChart from './ItemChart';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const URI = 'http://localhost:8800/api'


const ItemChartContainer = () => {

    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


    const { data, loading, reFetch } = useFetch(`${URI}/chart/`);
    const date = new Date().getMonth()
    const labels = [monthNames[date - 3], monthNames[date - 2], monthNames[date - 1], monthNames[date]]

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Laboratorios',
            },
        },
    };


    return (
        <ItemChart data={data} loading={loading} labels={labels} options={options} />
    )
}

export default ItemChartContainer
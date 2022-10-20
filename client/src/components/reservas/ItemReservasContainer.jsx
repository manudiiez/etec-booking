import React from 'react'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemReservasList from './ItemReservasList'
const ItemReservasContainer = () => {

    const { data, loading, reFetch } = useFetch(`/lab`);


    return (
        <ItemReservasList loading={loading} data={data} reFetch={reFetch} />
    )
}

export default ItemReservasContainer
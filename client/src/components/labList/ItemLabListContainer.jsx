import React from 'react'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemLabList from './ItemLabList'

const ItemLabListContainer = () => {

    const { data, loading, reFetch } = useFetch(`/lab`);


    return (
        <ItemLabList data={data} loading={loading} reFetch={reFetch} />
    )
}

export default ItemLabListContainer
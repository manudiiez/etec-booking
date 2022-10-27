import React from 'react'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader';
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';

const Lab = () => {

    const { id } = useParams()
    const { data, loading, reFetch } = useFetch(`/lab/${id}`);



    return (
        <div>
            {/* <Loader /> */}
            {
                loading ? (
                    <Loader />
                ):(
                    data.name
                )
            }
        </div>
    )
}

export default Lab

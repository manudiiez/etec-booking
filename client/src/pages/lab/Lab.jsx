import React from 'react'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useParams } from 'react-router-dom'
import ItemLabHeader from '../../components/ItemLabHeader';
import Loader from '../../components/Loader';
import ItemModuleContainer from '../../components/moduleList/ItemModuleContainer';
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
                    <>
                        <ItemLabHeader data={data}/>
                        <ItemModuleContainer labId={data._id}/>
                    </>
                )
            }
        </div>
    )
}

export default Lab

import React from 'react'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemSubjectList from './ItemSubjectList'

const ItemSubjectListContainer = ({userId}) => {

    const { data, loading, error } = useFetch(`/subject/${userId}`);
    

    return (
        <ItemSubjectList data={data} loading={loading} error={error} />
    )
}

export default ItemSubjectListContainer
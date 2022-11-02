import React from 'react'
/* ------------------------------ REACT-SELECT ------------------------------ */
import Select from 'react-select';
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';

const ItemLabSelect = ({id, handleChangeSelect}) => {

    const { data, loading, error } = useFetch(`/subject/teacher/${id}`);

    const options = data.map(subject => {
        const info = {
            value: subject.name,
            label: subject.name,
            type: subject.type,
            age: subject.age,
            id: subject._id,
        }

        return info
    })

    return (
        <Select className='select' options={options} onChange={handleChangeSelect} />

    )
}

export default ItemLabSelect
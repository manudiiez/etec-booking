import React, { useState } from 'react'
/* ---------------------------------- AXIOS --------------------------------- */
import axios from 'axios';
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom';
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemSubjectList from './ItemSubjectList'

const ItemSubjectListContainer = ({userId}) => {
    const [subject, setSubject] = useState({
        name: 'Matematicas',
        age: 1,
        type: 'informatica',
    });
    const [modalState, setModalState] = useState(false);

    const navigate = useNavigate()

    const { data, loading, error } = useFetch(`/subject/teacher/${userId}`);

    const changeModalState = () => {
        setModalState(!modalState)
    }
    
    const handleChange = (e) => {
        setSubject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleChangeSelect = (e) => {
        setSubject((prev) => ({ ...prev, ['type']: e.value }));
    };

    const onSubmit = async () => {
        try {
            const res = await axios.put(`/subject/${subject._id}`, subject);
            navigate("/");
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ItemSubjectList handleChange={handleChange} setSubject={setSubject} subjectData={subject} data={data} loading={loading} error={error} submit={onSubmit} modal={modalState} changeModal={changeModalState} changeSelect={handleChangeSelect} />
    )
}

export default ItemSubjectListContainer
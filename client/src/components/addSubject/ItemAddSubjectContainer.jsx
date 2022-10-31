import React, { useState } from 'react'
/* ---------------------------------- AXIOS --------------------------------- */
import axios from 'axios';
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom';
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemAddSubject from './ItemAddSubject'

const ItemAddSubjectContainer = ({ user }) => {

    const [subject, setSubject] = useState({
        name: 'Matematicas',
        age: 1,
        type: '',
        teacher: user.username,
    });
    const [errorMsj, setErrorMsj] = useState(null);

    const [modalState, setModalState] = useState(false);

    const navigate = useNavigate()

    const changeModalState = () => {
        setModalState(!modalState)
    }
    
    const handleChange = (e) => {
        setSubject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleChangeSelect = (e) => {
        setSubject((prev) => ({ ...prev, ['type']: e.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        if(subject.name.length === 0 || subject.age.length === 0 || subject.type.length === 0 || subject.teacher.length === 0){
            setErrorMsj('Debe completar los campos')
        }else{
            try {
                const res = await axios.post(`/subject/${user._id}`, subject);
                navigate("/");
            } catch (err) {
                console.log(err)
            }
        }

    }

    return (
        <ItemAddSubject subjectData={subject} changeModal={changeModalState} modal={modalState} handleChange={handleChange} changeSelect={handleChangeSelect} submit={onSubmit} errorMsj={errorMsj} />
    )
}

export default ItemAddSubjectContainer
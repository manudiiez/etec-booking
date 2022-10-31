import React, { useContext, useState } from 'react'
/* ---------------------------------- AXIOS --------------------------------- */
import axios from 'axios';
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from "../../context/AuthContext";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemUserHeader from './ItemUserHeader'

const ItemUserHeaderContainer = ({ user }) => {

    const [modalState, setModalState] = useState(false);

    const [credentials, setCredentials] = useState({
        username: user.username,
        fullname: user.fullname,
        email: user.email
    });


    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()



    const changeModalState = () => {
        setModalState(!modalState)
    }

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(credentials)
    };

    const onSubmit = async () => {
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.put(`/users/${user._id}`, credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }

    return (
        <ItemUserHeader user={user} changeModal={changeModalState} modal={modalState} handleChange={handleChange} credentials={credentials} submit={onSubmit} />
    )
}

export default ItemUserHeaderContainer
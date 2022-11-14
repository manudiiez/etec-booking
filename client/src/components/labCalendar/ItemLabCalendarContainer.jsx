import React, { useContext, useState } from 'react'
/* ---------------------------------- AXIOS --------------------------------- */
import axios from 'axios';
/* -------------------------------- CONTETXT -------------------------------- */
import { AuthContext } from '../../context/AuthContext';
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom'
/* ------------------------------- SWEETALERT ------------------------------- */
import Swal from 'sweetalert2'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemLabCalendar from './ItemLabCalendar';


const ItemLabCalendarContainer = ({ labId }) => {

    const { data, loading, error, reFetch } = useFetch(`/lab/events/${labId}`);
    const [modalState, setModalState] = useState(false);
    const [bookingItem, setBookingItem] = useState(null);
    const [subjectSelect, setSubjectSelect] = useState({
        name: '',
        type: '',
        age: '',
        id: '',
    });



    const { user } = useContext(AuthContext);


    const changeModalState = () => {
        setModalState(!modalState)
    }


    const getEvent = (date, endDate) => {


        let date2 = new Date(date)
        let endDate2 = new Date(endDate)
        console.log(`${date2.getDate()}/${date2.getMonth() + 1}/${date2.getFullYear()} a las ${date2.getHours()}:${date2.getMinutes()} hasta las ${endDate2.getHours()}:${endDate2.getMinutes()}`)
        const date3 = `${date2.getDate()}/${date2.getMonth() + 1}/${date2.getFullYear()} a las ${date2.getHours()}:${date2.getMinutes()} hasta las ${endDate2.getHours()}:${endDate2.getMinutes()}`
        return date3
    }

    const editBooking = async () => {

        setModalState(false)

        try {
            const res = await axios.get(`/subject/${subjectSelect.id}`);

            try {
                await axios.put(`/booking/${bookingItem._id}/${subjectSelect.id}/${labId}/${user._id}`, {
                    subjectAge: res.data.age,
                    subjectName: res.data.name,
                    subjectType: res.data.type,
                    teacherId: user._id,
                    teacherName: user.fullname,
                });

                Swal.fire({
                    icon: 'success',
                    title: 'Reserva registrada',
                    timer: 1500
                }).then(async(result) => {
                    reFetch()
                })
                

            } catch (error) {
                console.log(error.response.data.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response.data.message,
                    confirmButtonText: 'Continuar'
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteBooking = async () => {
        Swal.fire({
            title: 'Estas seguro??',
            text: "No hay vuelta atras",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/booking/${bookingItem._id}/${user._id}`)
                    Swal.fire(
                        'Eliminado!',
                        'Tu reserva fue eliminada.',
                        'success'
                    )
                    reFetch()
                } catch (error) {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.response.data.message,
                        confirmButtonText: 'Continuar'
                    })
                }
            }
        })
        
    }

    const handleChangeSelect = (e) => {
        setSubjectSelect((prev) => ({ ...prev, ['name']: e.value }));
        setSubjectSelect((prev) => ({ ...prev, ['type']: e.type }));
        setSubjectSelect((prev) => ({ ...prev, ['age']: e.age }));
        setSubjectSelect((prev) => ({ ...prev, ['id']: e.id }));
    };



    return (
        <ItemLabCalendar data={data} loading={loading} error={error} getEvent={getEvent} editBooking={editBooking} modal={modalState} changeModal={changeModalState} setBookingItem={setBookingItem} bookingItem={bookingItem} handleChangeSelect={handleChangeSelect} userId={user._id} deleteBooking={deleteBooking} />
    )
}

export default ItemLabCalendarContainer
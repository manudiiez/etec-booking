import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemLabCalendar from './ItemLabCalendar';

const ItemLabCalendarContainer = ({ labId }) => {

    const { data, loading, error } = useFetch(`/lab/events/${labId}`);
    const [modalState, setModalState] = useState(false);
    const [bookingItem, setBookingItem] = useState(null);
    const [subjectSelect, setSubjectSelect] = useState({
        name: '',
        type: '',
        age: '',
        id: '',
    });


    const navigate = useNavigate()

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

        console.log(`/booking/${bookingItem._id}/${subjectSelect.id}/${labId}/${user._id}`)

        try {
            const res = await axios.get(`/subject/${subjectSelect.id}`);

            console.log(res)

            try {
                const bookingUpdated = await axios.put(`/booking/${bookingItem._id}/${subjectSelect.id}/${labId}/${user._id}`, {
                    subjectAge: res.data.age,
                    subjectName: res.data.name,
                    subjectType: res.data.type,
                    teacherId: user._id,
                    teacherName: user.fullname,
                });

                navigate('/')

            } catch (error) {
                console.log(error)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteBooking = async() => {
        try {
            const bookingUpdated = await axios.delete(`/booking/${bookingItem._id}/${subjectSelect.id}/${user._id}`)
        } catch (error) {
            
        }
    }

    const handleChangeSelect = (e) => {
        setSubjectSelect((prev) => ({ ...prev, ['name']: e.value }));
        setSubjectSelect((prev) => ({ ...prev, ['type']: e.type }));
        setSubjectSelect((prev) => ({ ...prev, ['age']: e.age }));
        setSubjectSelect((prev) => ({ ...prev, ['id']: e.id }));
    };



    return (
        <ItemLabCalendar data={data} loading={loading} error={error} getEvent={getEvent} editBooking={editBooking} modal={modalState} changeModal={changeModalState} setBookingItem={setBookingItem} bookingItem={bookingItem} handleChangeSelect={handleChangeSelect} userId={user._id} />
    )
}

export default ItemLabCalendarContainer
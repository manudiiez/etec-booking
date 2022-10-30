import React, { useState } from 'react'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemLabCalendar from './ItemLabCalendar';

const ItemLabCalendarContainer = ({labId}) => {

    const { data, loading, error } = useFetch(`/lab/events/${labId}`);

    const getEvent = (date, endDate) => {
        let date2 = new Date(date)
        let endDate2 = new Date(endDate)
        const date3 = `${date2.getDate()}/${date2.getMonth()}/${date2.getFullYear()} a las ${date2.getHours()}:${date2.getMinutes()} hasta las ${endDate2.getHours()}:${endDate2.getMinutes()}`
        return date3
    }

    return (
        <ItemLabCalendar data={data} loading={loading} error={error} getEvent={getEvent}/>
    )
}

export default ItemLabCalendarContainer
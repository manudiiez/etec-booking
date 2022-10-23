import React, { useState } from 'react'
/* --------------------------- REACT-BIG-CALENDAR --------------------------- */
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
/* --------------------------------- MOMMENT -------------------------------- */
import moment from 'moment';
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components';


const Events = [
    {
        'title': 'Programacion 1',
        'allDay': true,
        'start': new Date(2022, 9, 14), // 10.00 AM
        'end': new Date(2022, 9, 14), // 10.00 AM
    },
]
const localizer = momentLocalizer(moment);


const ItemCalendarContainer = () => {
    const [myEvents, setMyEvents] = useState();

    return (
        <Container>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                events={Events}
                selectable={true}
                defaultView='week'
                onSelectEvent={(event) => console.log(event)}
                className='cal'
            />
        </Container>
    )
}

export default ItemCalendarContainer

const Container = styled.div`
    

`
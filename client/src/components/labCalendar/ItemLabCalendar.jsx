import React from 'react'
/* -------------------------------- CALENDAR -------------------------------- */
import { ResponsiveCalendar } from 'react-responsive-calendar'
import { Timeline, Event } from "react-timeline-scribble";

/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../Loader'


const ItemLabCalendar = ({ data, loading, error, getEvent }) => {
    return (
        <Container>
            <div className="container-lg">
                {/* <div className="calendar">
                    <ResponsiveCalendar
                        withWeekDays
                        breakPoint={768}
                        date={new Date()}
                    
                    />
                </div> */}
                <p>Eventos</p>
                <Timeline>
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            data.map(item => (
                                <Event interval={getEvent(item.date, item.endDate)} title={item.subjectName} subtitle={item.teacherName} key={item._id}>
                                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id est laborum.
                                </Event>
                            ))
                        )
                    }

                </Timeline>

            </div>
        </Container>
    )
}

export default ItemLabCalendar

const Container = styled.div`
    padding: 5rem 1rem;
    background-color: ${props => props.theme.white_2};
    .container-lg{
        height: 100%;
        max-height: 500px;
        overflow-y: scroll;
    }

`
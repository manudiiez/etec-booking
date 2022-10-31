import React from 'react'
/* -------------------------------- CALENDAR -------------------------------- */
import { ResponsiveCalendar } from 'react-responsive-calendar'
import { Timeline, Event } from "react-timeline-scribble";

/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme';
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
                                    <EventContainer>
                                        <div>
                                            <p>{item.subjectType}</p>
                                            <p>{item.subjectAge}</p>
                                        </div>
                                        <div>
                                            <button>Reservar</button>
                                            <button>Eliminar</button>
                                        </div>
                                    </EventContainer>
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
const EventContainer = styled.div`

    p{
        ${Text({ size: '1.3rem', color: props => props.theme.white_2, weight: '600' })}
        background-color: ${props => props.theme.orange};
        padding: 1rem;
        border-radius: 10px;
        width: 100%;
        margin-right: 1rem;
        margin-bottom: 1rem;
        display: inline-block;
    }   

    div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        button{
            width: 100%;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            border: none;
            ${Text({ size: '1rem', color: props => props.theme.black, weight: '600' })}
            cursor: pointer;

            &:nth-of-type(2){
                background-color: ${props => props.theme.red};
                ${Text({ size: '1rem', color: props => props.theme.white_2, weight: '600' })}

            }

        }
    }

`
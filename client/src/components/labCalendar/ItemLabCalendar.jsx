import React from 'react'
/* -------------------------------- CALENDAR -------------------------------- */
import { ResponsiveCalendar } from 'react-responsive-calendar'
import { Timeline, Event } from "react-timeline-scribble";

/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme';
/* ------------------------------ FULL-CALENDAR ----------------------------- */
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';

/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../Loader'
import ItemModal from '../modal/ItemModal'
import ItemModuleSelect from '../moduleList/ItemModuleSelect';
import ItemLabSelect from './ItemLabSelect';



const ItemLabCalendar = ({ data, loading, error, getEvent, editBooking, modal, changeModal, setBookingItem, bookingItem, handleChangeSelect, userId, deleteBooking }) => {

    const selectBooking = (item) => {
        setBookingItem({...item.event._def.extendedProps, date: item.event._instance.range.start})
        console.log(bookingItem)
        changeModal()
    }

    const date = new Date()

    return (
        <Container>

            <ItemModal modal={modal} change={changeModal}>
                <ModalBody>
                    <p className="title">
                        Editar <span>Reserva</span>
                    </p>
                    <div>
                        <p>{bookingItem && bookingItem.subjectName}</p>
                        <p>{bookingItem && bookingItem.teacherName}</p>
                        <p>{bookingItem && bookingItem.subjectType}</p>
                        <p>{bookingItem && bookingItem.subjectAge}</p>
                    </div>
                    {
                        bookingItem && <ItemLabSelect handleChangeSelect={handleChangeSelect} id={userId} />
                    }
                    <button onClick={selectBooking} disabled={new Date(bookingItem?.date).getDate() === new Date().getDate()} >Editar reserva</button>
                    <button onClick={deleteBooking}>Eliminar</button>
                </ModalBody>
            </ItemModal>

            <div className="container-lg">
                <p>Eventos</p>
                <FullCalendar
                    plugins={[timeGridPlugin]}
                    slotDuration='00:30:00'
                    slotMinTime='07:00:00'
                    slotMaxTime='19:00:00'
                    headerToolbar={{
                        center: 'timeGridWeek timeGridDay' // buttons for switching between views
                    }}
                    views={{
                        timeGridWeek: {
                            type: 'timeGrid',
                            duration: { days: 5 },
                            buttonText: 'Week'
                        }
                    }}
                    weekends={false}
                    editable={true}
                    selectable={true}
                    events={data}

                    eventClick={(data) => {
                        selectBooking(data)
                    }}
                />
                {/* <Timeline>
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
                                            <button onClick={() => { selectBooking(item) }}>Reservar</button>
                                            <button onClick={() => { chooseBooking(item) }}>Eliminar</button>
                                        </div>
                                    </EventContainer>
                                </Event>
                            ))
                        )
                    }

                </Timeline> */}

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

const ModalBody = styled.div`
    width: 100%;
    .title{
        ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '600' })}
        text-align: center;
        span{
            color: ${props => props.theme.orange};
        }
        margin-bottom: 3rem;
    }
    div{
        p{
            &:nth-of-type(1){
                ${Text({ size: '1.5rem', color: props => props.theme.orange, weight: '600' })}
            }
            &:nth-of-type(2){
                ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '400' })}
            }
            &:nth-of-type(3){
                ${Text({ size: '1rem', color: props => props.theme.white_2, weight: '700' })}
                background-color: ${props => props.theme.orange};
                padding: 1rem;
                border-radius: 10px;
            }
            &:nth-of-type(4){
                ${Text({ size: '1rem', color: props => props.theme.white_2, weight: '700' })}
                background-color: ${props => props.theme.orange};
                padding: 1rem;
                border-radius: 10px;
            }
        }
    }
    button{
        width: 100%;
        padding: 1rem 0;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 10px;
        background-color: ${props => props.theme.orange};
        ${Text({ size: '1rem', color: props => props.theme.white_2, weight: '600' })}
        margin-top: 2rem;
        cursor: pointer;

        &:disabled{
            background-color: ${props => props.theme.gray};
            color: ${props => props.theme.black};
            cursor: not-allowed;
        }
    }
`
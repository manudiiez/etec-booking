import React, { useEffect, useState } from 'react'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from "../../hooks/useFetch";
/* ---------------------------------- AXIOS --------------------------------- */
import axios from "axios";
import ItemModuleRangeCalendar from './ItemModuleRangeCalendar';
import styled from 'styled-components';
import ItemModule from './ItemModule';



const ItemModuleContainer = ({ labId }) => {

    const [myEvents, setMyEvents] = useState([]);
    const [selectedModules, setSelectedModules] = useState([]);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ]);


    const { data, loading, error } = useFetch(`/lab/module/${labId}`);

    const getEventsDate = async () => {
        const events = []
        data.map((module) => {
            module.unavailableDates.map((event) => {
                const startDate = new Date(event.date)
                const endDate = new Date(event.date)
                startDate.setHours(module.startHour, module.startTime)
                endDate.setHours(module.endHour, module.endTime)
                const newEvent = {
                    title: event.subjectName,
                    allDay: false,
                    start: startDate,
                    end: endDate,
                    id: event._id
                }
                events.push(newEvent)
            })
        })
        setMyEvents(events)
        console.log(events)
    }

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list = [];

        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return list;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvalible = (dateNumber) => {
        const isFound = dateNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date.date).getTime())
        );

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedModules(
            checked
                ? [...selectedModules, value]
                : selectedModules.filter((item) => item !== value)
        );
    };


    useEffect(() => {
        if (data) {
            getEventsDate()
        }
    }, [data])

    return (
        <Container>
            <div className='content'>
                <ItemModuleRangeCalendar setDates={setDates} dates={dates} />
                <ItemModule data={data} loading={loading} error={error} isAvalible={isAvalible} handleSelect={handleSelect} />
            </div>
            <button className='btn'>Reservar</button>
        </Container>
    )
}

export default ItemModuleContainer

const Container = styled.div`
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .content{
        width: 100%;
        display: flex;
        align-items: stretch;
        flex-direction: column;
        gap: 2rem;
    
        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    .btn{
        width: 100%;
        max-width: 400px;
        padding: 1rem 0;
        background-color: ${props => props.theme.color_3};
        border: none;
        color: ${props => props.theme.color_1};
        font-size: 1.3rem;
        font-weight: 600;
        border-radius: 10px;
        margin-top: 2rem;
    }

`
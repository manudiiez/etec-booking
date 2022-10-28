import React, { useContext, useEffect, useState } from 'react'
/* ---------------------------------- AXIOS --------------------------------- */
import axios from 'axios';
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemModule from './ItemModule'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch';
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from "../../context/AuthContext";



const ItemModuleContainer = ({ labId }) => {

    const dateWithoutTime = () => {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    };

    const [selectedModules, setSelectedModules] = useState([]);
    const [dates, setDates] = useState({
        startDate: dateWithoutTime(),
        endDate: dateWithoutTime(),
        key: "selection",
    });

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)

    const { data, loading, error } = useFetch(`/lab/module/${labId}`);



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

    const alldates = getDatesInRange(dates.startDate, dates.endDate);

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

    const handleClick = async () => {
        console.log('reservar')
        try {
            await Promise.all(
                selectedModules.map((module) => {
                    alldates.map((selectedDate) => {
                        const res = axios.put(`/module/availability/${module}`, {
                            subjectName: 'programacion',
                            teacherName: user.fullname,
                            date: selectedDate,
                        });
                        return res.data;
                    })
                })
            );
            navigate("/");
        } catch (err) { }
    };

    return (
        <ItemModule data={data} loading={loading} dates={dates} setDates={setDates} isAvalible={isAvalible} handleSelect={handleSelect} handleClick={handleClick} />
    )
}

export default ItemModuleContainer
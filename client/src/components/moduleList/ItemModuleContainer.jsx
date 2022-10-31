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

    
    
    const [modalState, setModalState] = useState(false);
    const [subjectSelect, setSubjectSelect] = useState({
        name: '',
        type: '',
        age: '',
    });

    const changeModalState = () => {
        setModalState(!modalState)
    }

    const dateWithoutTime = () => {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    };

    const [selectedModules, setSelectedModules] = useState([]);
    const [selectedModulesView, setSelectedModulesView] = useState([]);
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
        let list2 = [];

        while (date <= end) {
            const dateBooking = new Date(date)
            list.push(new Date(date).getTime());
            list2.push(`${dateBooking.getDate()}/${dateBooking.getMonth() + 1}`);
            date.setDate(date.getDate() + 1);
        }
        
        return list;    
    };

    const getDatesView = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list = [];

        while (date <= end) {
            const dateBooking = new Date(date)
            list.push(`${dateBooking.getDate()}/${dateBooking.getMonth() + 1}`);
            date.setDate(date.getDate() + 1);
        }
        
        return list;   
    }

    const alldates = getDatesInRange(dates.startDate, dates.endDate);
    const datesView = getDatesView(dates.startDate, dates.endDate);

    const isAvalible = (dateNumber) => {

        const isFound = dateNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date.date).getTime())
        );

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        const name = e.target.name;
        setSelectedModules(
            checked
                ? [...selectedModules, value]
                : selectedModules.filter((item) => item !== value)
        );

        setSelectedModulesView(
            checked
                ? [...selectedModulesView, name]
                : selectedModulesView.filter((item) => item !== name)
        );

    };

    const handleChangeSelect = (e) => {
        setSubjectSelect((prev) => ({ ...prev, ['name']: e.value }));
        setSubjectSelect((prev) => ({ ...prev, ['type']: e.type }));
        setSubjectSelect((prev) => ({ ...prev, ['age']: e.age }));
    };

    const handleClick = async () => {
        console.log('reservar')
        if(subjectSelect.name.length !== 0 || subjectSelect.type.length !== 0 || subjectSelect.age.length !== 0){
            try {
                await Promise.all(
                    selectedModules.map((module) => {
                        alldates.map((selectedDate) => {
                            const res = axios.put(`/module/availability/${module}`, {
                                teacherName: user.fullname,
                                date: selectedDate,
                                subjectName: subjectSelect.name,
                                subjectType: subjectSelect.type,
                                subjectAge: subjectSelect.age
                            });
                            return res.data;
                        })
                    })
                );
                navigate("/");
            } catch (err) { }
        }else{
            console.log('vacio')
        }
    };



    // useEffect(() => {
    //     getDatesView()
    // }, alldates)

    

    return (
        <ItemModule data={data} loading={loading} dates={dates} setDates={setDates} isAvalible={isAvalible} handleSelect={handleSelect} handleClick={handleClick} modal={modalState} changeModal={changeModalState} datesView={datesView} selectedModulesView={selectedModulesView} user={user} handleChangeSelect={handleChangeSelect} />
    )
}

export default ItemModuleContainer
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const Events = [
    {
      'title': 'Programacion 1',
      'allDay': true,
      'start': new Date(2022, 9, 14), // 10.00 AM
      'end': new Date(2022, 9, 14), // 10.00 AM
    },
]

const localizer = momentLocalizer(moment);


const Modules = ({ labid, dates }) => {
  const [selectedModules, setSelectedModules] = useState([]);
  const [myEvents, setMyEvents] = useState();


  const { user } = useContext(AuthContext)


  const navigate = useNavigate();

  const { data, loading, error } = useFetch(`/lab/module/${labid}`);

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

  const handleClick = async () => {
    console.log('reservar')
    try {
      await Promise.all(
        selectedModules.map((module) => {
          alldates.map((selectedDate) => {
            const start = new Date(selectedDate).setHours()
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
    } catch (err) {}
  };

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



  useEffect(() => {
    if(data){
        getEventsDate()
    }
  },[data])

  return (
    <div>
      <p>Modules</p>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                events={myEvents}
                selectable={true}
                defaultView='week'
                onSelectEvent={(event) => console.log(event)}
            />
            <ul className="list-group">
            {data.map((item) => (
                <li key={item._id} className="list-group-item">
                {item.name}
                <input type="checkbox" value={item._id} disabled={!isAvalible(item)} onChange={handleSelect} />
                </li>
            ))}
            </ul>
        </>
      )}
      <button className="btn btn-primary mt-5" onClick={handleClick}>Reservar</button>
    </div>
  );
};

export default Modules;

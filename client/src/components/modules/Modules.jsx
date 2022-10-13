import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Modules = ({ labid, dates }) => {
  const [selectedModules, setSelectedModules] = useState([]);

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
  console.log(alldates);

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
    try {
      await Promise.all(
        selectedModules.map((module) => {
          alldates.map((selectedDate) => {
            console.log(module, selectedDate)
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

  return (
    <div>
      <p>Modules</p>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ul className="list-group">
          {data.map((item) => (
            <li key={item._id} className="list-group-item">
              {item.name}
              <input type="checkbox" value={item._id} disabled={!isAvalible(item)} onChange={handleSelect} />
            </li>
          ))}
        </ul>
      )}
      <button className="btn btn-primary mt-5" onClick={handleClick}>Reservar</button>
    </div>
  );
};

export default Modules;

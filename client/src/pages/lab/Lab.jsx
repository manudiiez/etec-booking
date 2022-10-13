import {useState} from "react";
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from "../../hooks/useFetch.js";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useParams } from "react-router-dom";
/* ------------------------------- DATE-RANGE ------------------------------- */
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
/* ------------------------------- COMPONENTS ------------------------------- */
import Modules from "../../components/modules/Modules.jsx";

const Lab = () => {
  const { id } = useParams();

  const { data, loading, reFetch } = useFetch(`/lab/${id}`);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="p-5">
            
          <h1>{data.name}</h1>
          <DateRange
            editableDateInputs={true}
            onChange={item => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className="date"
          />
          <div>
            <Modules labid={id} dates={dates} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lab;

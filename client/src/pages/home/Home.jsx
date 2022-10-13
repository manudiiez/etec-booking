import React from "react";
import { useEffect } from "react";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Link } from "react-router-dom";
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from "../../hooks/useFetch.js";

const Home = () => {
  const { data, loading, reFetch } = useFetch(`/lab`);


  return (
    <div>
      <div>
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">
            {data.map((item) => (
              <div className="card col-4" key={item._id} >
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.title}</h6>
                  <p className="card-text">
                    {item.desc}
                  </p>
                  <p>{item.type}</p>
                  <Link to={`/lab/${item._id}`} >Ver mas</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

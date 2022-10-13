import { useState, useContext } from "react";
/* ---------------------------------- AXIOS --------------------------------- */
import axios from "axios";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Link, useNavigate } from "react-router-dom";
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="p-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          onClick={handleClick}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      <Link to='signup'>Registrarse</Link>
    </div>
  );
};

export default SignIn;

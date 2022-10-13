import { useState, useContext } from "react";
/* ---------------------------------- AXIOS --------------------------------- */
import axios from 'axios'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Link, useNavigate } from "react-router-dom";
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    fullname: undefined,
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
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
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre completo
          </label>
          <input
            type="email"
            className="form-control"
            name="fullname"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre de usuario
          </label>
          <input
            type="email"
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
        <button type="submit" disabled={loading} onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to='/'>Iniciar sesion</Link>

    </div>
  );
};

export default SignUp;

import { useContext, useState } from 'react'
/* ---------------------------- react-router-dom ---------------------------- */
import { useNavigate } from 'react-router-dom';
/* ---------------------------------- AXIOS --------------------------------- */
import axios from 'axios'
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from "../../context/AuthContext";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemSignUp from './ItemSignUp'

const ItemSignUpContainer = () => {

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
    <ItemSignUp handleChange={handleChange} handleClick={handleClick} loading={loading} error={error} />
  )
}

export default ItemSignUpContainer
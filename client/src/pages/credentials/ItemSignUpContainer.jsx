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
    password: undefined
  });
  const [confirmPassword, setConfirmPassword] = useState(undefined);

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    if (!credentials.email || !credentials.fullname || !credentials.username || !credentials.password) {
      const err = {
        message: "Debe completar los campos"
      }
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    } else if (credentials.password !== confirmPassword) {
      const err = {
        message: "Las contraseñas no coinciden"
      }
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    } else {
      try {

        const res = await axios.post("/auth/register", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    }
  };


  return (
    <ItemSignUp handleChange={handleChange} handleClick={handleClick} setConfirmPassword={setConfirmPassword} loading={loading} error={error} />
  )
}

export default ItemSignUpContainer
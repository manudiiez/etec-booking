import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import styled from "styled-components";
import Select from 'react-select'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { modules } from "../../moduleData.js";
import Swal from 'sweetalert2'



const optionsLab = [
  { value: 'informatica', label: 'Informatica' },
  { value: 'electronica', label: 'Electronica' },
  { value: 'otro', label: 'Otro' },
]
const optionsUser = [
  { value: true, label: 'Es administrador' },
  { value: false, label: 'No es administrador' }
]



const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const location = useLocation()
  const path = location.pathname.split('/')[1];
  const [info, setInfo] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeSelect = (e) => {
    if (path === 'users') {
      setInfo((prev) => ({ ...prev, ['isAdmin']: e.value }));
    } else {
      setInfo((prev) => ({ ...prev, ['type']: e.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dykysdnj9/image/upload",
        data
      );

      const { url } = uploadRes.data

      if (path === 'users') {

        const newItem = {
          ...info,
          img: url
        }
        await axios.post('/auth/register', newItem)
      } else {

        const newItem = {
          ...info,
          img: url
        }
        const lab = await axios.post('/lab', newItem)

        await Promise.all(modules.map(async (module) => {
          return await axios.post('/module/' + lab.data._id, module)
        }))
      }

      navigate('/')

    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Continuar'
      })
    }
  };


  return (
    <Container className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>


              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} onChange={handleChange} name={input.name} placeholder={input.placeholder} />
                </div>
              ))}
              {path === 'users' ? (

                <div className="formInput">
                  <label>Administrador</label>
                  <Select onChange={handleChangeSelect} name='isAdmin' options={optionsUser} />
                </div>
              ) : (
                <div className="formInput">
                  <label>Categoria</label>
                  <Select onChange={handleChangeSelect} options={optionsLab} name='type' />
                </div>
              )
              }
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <button onClick={handleClick}>Crear</button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default New;


const Container = styled.div`
  
  width: auto;
  display: flex;  

  .newContainer {
    flex: 6;
    .top,
    .bottom {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 14px;
      margin: 20px;
      display: flex;

      h1 {
        color: lightgray;
        font-size: 20px;
      }

      .left {
        flex: 1;
        text-align: center;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      .right {
        flex: 2;

        form {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: space-around;

          .formInput {
            width: 40%;

            label {
              display: flex;
              align-items: center;
              gap: 10px;

              .icon {
                cursor: pointer;
              }
            }

            input {
              width: 100%;
              padding: 5px;
              border: none;
              border-bottom: 1px solid gray;
            }
          }

          button {
            width: 150px;
            padding: 10px;
            border: none;
            background-color: teal;
            color: white;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
          }
        }
      }
    }
  }

`
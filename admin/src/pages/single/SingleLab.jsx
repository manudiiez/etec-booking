import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import styled from "styled-components";
import FormEditContainer from "../../components/formEdit/FormEditContainer";
import Loader from "../../components/Loader";
import Select from 'react-select'

const optionsLab = [
    { value: 'informatica', label: 'Informatica' },
    { value: 'electronica', label: 'Electronica' },
    { value: 'otro', label: 'Otro' },
]

const SingleLab = () => {

    const { labId } = useParams()
    const { data, loading, error, reFetch } = useFetch(`/lab/${labId}`)

    const [labEdit, setlabEdit] = useState({
        name: '',
        title: '',
        desc: '',
    });

    const [modalState, setmodalState] = useState(false);

    const openModal = () => {
        setlabEdit(data)
        changeModalState()
    }

    const changeModalState = () => {
        setmodalState(!modalState)
    }

    const handleChange = (e) => {
        setlabEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault()
        if (labEdit.name.length === 0 || labEdit.title.length === 0 || labEdit.desc.length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Debe completar los campos',
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
        } else {
            try {
                const res = await axios.put(`/lab/${data._id}`, labEdit);
                reFetch()
            } catch (err) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Algo salio mal',
                    icon: 'error',
                    confirmButtonText: 'Continuar'
                })
            }
        }
    };

    const handleChangeSelect = (e) => {
        setlabEdit((prev) => ({ ...prev, ['type']: e.value }));
    };

    return (
        <Container className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <div className="top">
                            <div className="left">
                                <div className="editButton" onClick={openModal}>Editar</div>
                                <h1 className="title">Informacion</h1>
                                <div className="item">
                                    <img
                                        src={data.img}
                                        alt=""
                                        className="itemImg"
                                    />
                                    <div className="details">
                                        <h1 className="itemTitle">{data.username}</h1>
                                        <div className="detailItem">
                                            <span className="itemKey">Nombre:</span>
                                            <span className="itemValue">{data.name}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Tipo:</span>
                                            <span className="itemValue">{data.type}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Titulo:</span>
                                            <span className="itemValue">{data.title}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Descripcion:</span>
                                            <span className="itemValue">
                                                {data.desc}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FormEditContainer modal={modalState} change={changeModalState}>
                                <FormBody>
                                    <p>Editar Laboratorio</p>
                                    <div className="div">
                                        <label >Nombre</label>
                                        <input type="text" name="name" value={labEdit.name} onChange={handleChange} />
                                    </div>
                                    <Select onChange={handleChangeSelect} options={optionsLab} name='type' />
                                    <div className="div">
                                        <label>Titulo</label>
                                        <input type="text" name="title" value={labEdit.title} onChange={handleChange} />
                                    </div>
                                    <div className="div">
                                        <label>Descripcion</label>
                                        <input type="email" name="desc" value={labEdit.desc} onChange={handleChange} />
                                    </div>

                                    <button type="submit" onClick={handleClick}>Editar</button>
                                </FormBody>
                            </FormEditContainer>
                        </div>
                    )
                }
            </div>
        </Container>
    );
};

export default SingleLab;

const Container = styled.div`
  

  display: flex;
  width: 100%;
  .singleContainer {
      flex: 6;

      .top { 
      padding: 20px;
      display: flex;
      gap: 20px;
      flex-direction: column;

      .left {
          flex: 1;
          -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
          box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
          padding: 20px;
          position: relative;

          .editButton {
          position: absolute;
          top: 0;
          right: 0;
          padding: 5px;
          font-size: 12px;
          color: #7451f8;
          background-color: #7551f818;
          cursor: pointer;
          border-radius: 0px 0px 0px 5px;
          }

          .item {
              display: flex;
              gap: 20px;
              justify-content: space-between;

              .itemImg {
                  width: 150px;
                  height: 150px;
                  border-radius: 50%;
                  object-fit: cover;
              }

              .details {
                  width: 100%;
                  .itemTitle {
                  margin-bottom: 10px;
                  color: #555;
                  }

                  .detailItem {
                  margin-bottom: 10px;
                  font-size: 14px;

                  .itemKey {
                      font-weight: bold;
                      color: gray;
                      margin-right: 5px;
                  }

                  .itemValue {
                      font-weight: 300;
                  }
                  }
              }
          }
      }

      .right {
          flex: 2;
      }
      }

      .bottom {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 10px 20px;
      }

      .title {
      font-size: 16px;
      color: lightgray;
      margin-bottom: 20px;
      }
  }

`
const FormBody = styled.form`

  p{
      font-size: 26px;
      color: #999999;
      margin-bottom: 20px;
      text-align: center;
  }

  .div{
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      label{
        color: #6439ff;
        font-weight: bolder;  
        margin-bottom: 5px;   
      }

      input{
        border-radius: 5px;
        border: none;
        border: 1px solid #999999;
        padding: 7px;
      }
  }

  button{
      width: 100%;
      padding: 10px 0;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      border-radius: 10px;
      background-color: #6439ff;
      color: #fff;
      font-size: 20px;
      font-weight: bolder;
      margin-top: 10px;
  }

`

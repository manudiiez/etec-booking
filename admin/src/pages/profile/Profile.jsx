import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import FormEditContainer from "../../components/formEdit/FormEditContainer";
import { useState } from "react";
import Swal from 'sweetalert2'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    
    const { user, dispatch } = useContext(AuthContext)
    console.log(user)
    
    const [userEdit, setUserEdit] = useState({
        username: user.details.username,
        fullname: user.details.fullname,
        email: user.details.email
    });

    const [modalState, setmodalState] = useState(false);

    const changeModalState = () => {
        setmodalState(!modalState)
    }

    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async(e) => {
        e.preventDefault()
        if(userEdit.username.length === 0 || userEdit.fullname.length === 0 || userEdit.email.length === 0){
            Swal.fire({
                title: 'Error!',
                text: 'Debe completar los campos',
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
        }else{
            dispatch({ type: "LOGIN_START" });
            try {
                const res = await axios.put(`/users/${user.details._id}`, userEdit);
                console.log(res)
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

            } catch (err) {
                dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
            }
        }
    };

    return (
        <Container className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton" onClick={changeModalState}>Editar</div>
                        <h1 className="title">Informacion</h1>
                        <div className="item">
                            <img
                                src={user.details.img}
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{user.details.username}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Nombre y apellido:</span>
                                    <span className="itemValue">{user.details.fullname}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{user.details.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Categoria:</span>
                                    <span className="itemValue">Administrador</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Materias:</span>
                                    <span className="itemValue">
                                        {user.details.subjects.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormEditContainer modal={modalState} change={changeModalState}>
                        <FormBody>
                            <p>Editar usuario</p>
                            <div>
                                <label>Nombre de usuario</label>
                                <input type="text" name="username" value={userEdit.username} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Nombre y apellido</label>
                                <input type="text" name="fullname" value={userEdit.fullname} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email"  name="email" value={userEdit.email} onChange={handleChange} />
                            </div>
                            <button type="submit" onClick={handleClick}>Editar</button>
                        </FormBody>
                    </FormEditContainer>
                </div>
            </div>
        </Container>
    );
};

export default Profile;

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
                    width: 50%;
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

    div{
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
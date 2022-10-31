import React, { useContext, useState } from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {useNavigate} from 'react-router-dom'
/* --------------------------------- context -------------------------------- */
import { AuthContext } from '../../context/AuthContext'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemModal from '../modal/ItemModal'

const ItemDropdown = () => {

    const [modal, setModal] = useState(false);

    const { loading, error, dispatch } = useContext(AuthContext);


    const navigate = useNavigate()

    const changeModal = () => {
        setModal(!modal)
    }

    const logOut = async() => {
        dispatch({ type: "LOGOUT" });
    }


    return (
        <Container>
            <ItemModal modal={modal} change={changeModal}>
                <ModalBody>
                    <p className="title">
                        Cerrar <span>Sesion</span>
                    </p>
                    <div>
                        <button onClick={logOut}>Confirmar</button>
                    </div>
                </ModalBody>
            </ItemModal>
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUftCQRgVcLNy-j4C7bqsTDftnYMAE7z-AA&usqp=CAU" alt="" />
                <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/><path d="M0-.75h48v48h-48z" fill="none"/></svg>
            </div>
            <div className="dropdown">
                <ul>
                    <li>
                        <button onClick={() => {navigate('/user')}}>
                            <span>
                                Ver perfil
                            </span>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </button>
                    </li>
                    <li>
                        <button onClick={changeModal}>
                            <span>
                                Cerrar sesion
                            </span>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </button>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default ItemDropdown

const Container = styled.div`
    background-color: ${props => props.theme.white_2};
    position: relative;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .img{
        width: 30px;
        height: 30px;
        position: relative;
        img{
            border-radius: 50%;
            width: 100%;
            object-fit: cover;
        }
        svg{
            position: absolute;
            top: 0;
            left: 40%;
            width: 30px;
        }
    }

    .dropdown{
        display: none;
        width: 200px;
        position: absolute;
        right: 0;
        top: 80%;
        background-color: ${props => props.theme.orange};
        border-radius: 10px;
        border-top-right-radius: 0;
        ul{
            list-style: none;
            width: 100%;
            margin: 0;
            padding: 0;
            padding: 0 1rem;
            padding-top:1rem;
            li{
                button{
                    border-radius: 10px;
                    width: calc(100% - 2rem);
                    margin: 0;
                    margin-bottom: 1rem;
                    padding: 1rem;
                    background-color: ${props => props.theme.white_2};
                    border: none;
                    cursor: pointer;
                    height: 50px;
                    position: relative;
                    p{
                        margin: 0;
                    }
                    svg{
                        width: 20px;
                        height: 20px;
                        transition: all .3s ease-in-out;
                        position: absolute;
                        top: 15px;
                        right: 30%;
                        opacity: 0;
                    }

                    span{
                        transition: all .3s ease-in-out;
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        left: 50%;
                    }

                    &:hover{
                        color: ${props => props.theme.orange};

                        span{
                            left: 1rem;
                            transform: translateY(-50%);
                        }

                        svg{
                            fill: ${props => props.theme.orange};
                            opacity: 1;
                            right: 1rem;
                        }
                    }

                   

                    
                }
            }
        }
    }

    &:hover{
        background: linear-gradient(180deg, #FEFBF6 50%, #F89A40 100%);
        .dropdown{
            display: block;
        }
    }

`

const ModalBody = styled.div`
    width: 100%;
    .title{
        ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '600' })}
        text-align: center;
        span{
            color: ${props => props.theme.orange};
        }
        margin-bottom: 3rem;
    }

    button{
        width: 100%;
        padding: 1rem 0;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 10px;
        background-color: ${props => props.theme.red};
        ${Text({ size: '1rem', color: props => props.theme.white_2, weight: '600' })}
        cursor: pointer;
    }
`
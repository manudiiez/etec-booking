import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemModal from '../modal/ItemModal'

const ItemUserHeader = ({ user, changeModal, modal, handleChange, credentials, submit }) => {

    return (
        <Container>
            <ItemModal modal={modal} change={changeModal}>
                <ModalBody>
                    <p className="title">
                        Editar <span>Perfil</span>
                    </p>
                    <div className='form'>
                        <div className="controls">
                            <label>Nombre de usuario</label>
                            <input type="text" name='username' onChange={handleChange} value={credentials.username} />
                        </div>
                        <div className="controls">
                            <label>Nombre y apellido</label>
                            <input type="text" name='fullname' value={credentials.fullname} onChange={handleChange} />
                        </div>
                        <div className="controls">
                            <label>Email</label>
                            <input type="text" name='email' value={credentials.email} onChange={handleChange} />
                        </div>
                        <button onClick={submit}>Editar</button>
                    </div>
                </ModalBody>
            </ItemModal>
            <h4>Mi <span>Perfil</span></h4>
            <div className="container-lg">
                <div className="user-img">
                    <div className="img">
                        <img src="https://tecnosolucionescr.net/templates/yootheme/cache/27_Lab_acreditado-e651d64b.png" alt="" />
                        <h5>{user.username}</h5>
                    </div>
                </div>
                <div className="user-body">
                    <h5>{user.fullname}</h5>
                    <h6>{user.email}</h6>
                    <p>Materias: <span>{user.subjects.length}</span></p>
                    <button onClick={changeModal}>Editar</button>
                </div>
            </div>
        </Container>
    )
}

export default ItemUserHeader

const Container = styled.div`
    background-color: ${props => props.theme.white_2};
    padding: 5rem 1rem;
    h4{
        ${Text({ size: '2.3rem', color: props => props.theme.black, weight: '400' })}
        margin: 0;
        margin-bottom: 2rem;
        text-align: center;
        span{
            color: ${props => props.theme.orange}; 
            font-weight: 700;
        }
    }
    .container-lg{
        display: grid; 
        grid-template-rows: repeat(2, 1fr);
        gap: 1rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 10px;
        overflow: hidden;
        
        .img{
            width: auto;
            padding: 1rem;
            display: flex; 
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img{
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 50%;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                margin-bottom: 1rem;
            }

            h5{
                ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '400' })}
                margin: 0;
            }
        }
        .user-body{
            background-color: ${props => props.theme.orange};
            width: auto;
            height: auto;
            padding: 1rem;
            display: flex; 
            justify-content: center;
            align-items: start;
            flex-direction: column;
            h5{
                ${Text({ size: '1.3rem', color: props => props.theme.white, weight: '600' })}
                margin:0;
                margin-bottom: 1rem;
            }
            h6{
                ${Text({ size: '1rem', color: props => props.theme.white, weight: '600' })}
                margin:0;
                margin-bottom: 1rem;

            }
            p{
                ${Text({ size: '1rem', color: props => props.theme.white, weight: '400' })}
                margin:0;
                margin-bottom: 1rem;

                span{
                    font-weight: 700;
                    color: ${props => props.theme.black}; 
                }
            }

            button{
                width: 100%;
                padding:  1rem 0;
                background-color:  ${props => props.theme.white_2};
                ${Text({ size: '1rem', color: props => props.theme.orange, weight: '600' })}

                border: none;
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                cursor: pointer;

            }
        }
    }

    @media (min-width: 768px) {
        .container-lg{
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 2fr;
            .img{
                width: auto;
                align-items: center;

                img{
                    height: 200px;
                    width: 200px;
                    margin-bottom: 2rem;
                }
            }

            .user-body{
                width: 100%;
                h5{
                    ${Text({ size: '2.3rem', color: props => props.theme.white, weight: '600' })}
                    margin-bottom: 2rem;
                }
                h6{
                    ${Text({ size: '1.5rem', color: props => props.theme.white, weight: '600' })}
                    margin-bottom: 2rem;

                }
                p{
                    ${Text({ size: '1.3rem', color: props => props.theme.white, weight: '400' })}
                    margin-bottom: 3rem;

                }

                button{
                    width: calc(100% - 2rem);
                    font-size: 1.3rem;
                }
            }
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
    .form{
        .controls{
            label{
                ${Text({ size: '1.3rem', color: props => props.theme.orange, weight: '600' })}
            }
            input{
                box-sizing: border-box;
                width: 100%;
                padding: 1rem;
                margin-top: 1rem;
                margin-bottom: 2rem;
                border: none;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                border-radius: 10px;

            }
        }

        button{
            width: 100%;
            padding: 1rem 0;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            border-radius: 10px;
            background-color: ${props => props.theme.orange};
            ${Text({ size: '1rem', color: props => props.theme.white_2, weight: '600' })}
            
        }
    }
`

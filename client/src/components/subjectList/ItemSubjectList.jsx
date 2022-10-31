import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme'
/* ------------------------------ REACT-SELECT ------------------------------ */
import Select from 'react-select';


/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../Loader'
import ItemModal from '../modal/ItemModal'

const options = [
    { value: 'informatica', label: 'Informatica' },
    { value: 'electronica', label: 'Electronica' }
]

const ItemSubjectList = ({ data, loading, error, handleChange, setSubject, subjectData, submit, modal, changeModal,changeSelect }) => {
    return (
        <Container>
            <div className="container-lg">
                <ItemModal modal={modal} change={changeModal}>
                    <ModalBody>
                        <p className="title">
                            Editar <span>Perfil</span>
                        </p>
                        <div className='form'>
                            <div className="controls">
                                <label>Nombre de la materia</label>
                                <input type="text" value={subjectData.name} name='name' onChange={handleChange}  />
                            </div>
                            <div className="controls">
                                <label>Año</label>
                                <input type="number" name='age' value={subjectData.age} onChange={handleChange}  />
                            </div>
                            <div className="controls">
                                <label>Tipo</label>
                                <Select className='select' options={options} onChange={changeSelect} />
                            </div>
                            <button onClick={submit}>Editar</button>
                        </div>
                    </ModalBody>
                </ItemModal>
                <h6>Mis <span>Materias</span></h6>
                <ol>
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            data.map(subject => (
                                <li key={subject._id} onClick={() => setSubject(subject)}>
                                    <div>
                                        <p className='name'>{subject.name}</p>
                                        <p className='teacher'>{subject.teacher}</p>
                                        <p className='age'>Año: <span>{subject.age}</span></p>
                                        <p className='type'>{subject.type}</p>
                                        {/* <div className="bg">
                                            Editar
                                        </div> */}
                                    </div>
                                    <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" onClick={changeModal}><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                </li>
                            ))
                        )
                    }
                </ol>
            </div>
        </Container>
    )
}

export default ItemSubjectList

const Container = styled.div`
    padding: 5rem 1rem;  
    .container-lg{
        h6{
            ${Text({ size: '1.8rem', color: props => props.theme.black, weight: '600' })}
            text-align: center;
            margin: 0;
            margin-bottom: 3rem;
            span{
                color: ${props => props.theme.orange};
            }
        }
        ol{
            counter-reset: gradient-counter;
            list-style: none;
            margin: 1.75rem 0;
            padding-left: 1rem;
            > li {
                background: white;
                border-radius: 0 0.5rem 0.5rem 0.5rem;
                box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
                counter-increment: gradient-counter;
                margin-top: 1rem;
                min-height: 3rem;
                padding: 1rem 1rem 1rem 4rem;
                position: relative;
                transition: all .3s ease-in-out;
                &:hover{
                    transform: translateY(-1rem);
                    .bg{
                        display: flex;
                    }
                }
                
                &::before,
                &::after {
                    background: linear-gradient(135deg, $blue 0%,$green 100%);
                    border-radius: 1rem 1rem 0 1rem;
                    content: '';
                    height: 3rem;
                    left: -1rem;
                    overflow: hidden;
                    position: absolute;
                    top: -1rem;
                    width: 3rem;
                }
                &::before {
                    align-items: flex-end;
                    box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
                    content: counter(gradient-counter);
                    background-color: ${props => props.theme.orange};
                    color: #000;
                    display: flex;
                    font: 900 1.5em/1 'Montserrat';
                    justify-content: flex-end;
                    padding: 0.125em 0.25em;
                    z-index: 1;
                }

                .name{
                    ${Text({ size: '1.5rem', color: props => props.theme.orange, weight: '600' })}
                    margin: 0;
                    margin-bottom: 1rem;
                }

                .teacher{
                    ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '600' })}
                    margin: 0;
                    margin-bottom: 1rem;
                }

                .age{
                    ${Text({ size: '1rem', color: props => props.theme.black, weight: '600' })}
                    margin: 0;
                    margin-bottom: 1rem;
                    span{
                        color: ${props => props.theme.orange};
                        font-weight: 700;
                    }
                }

                .type{
                    ${Text({ size: '1rem', color: props => props.theme.white, weight: '400' })}
                    margin: 0;
                    background-color: ${props => props.theme.orange};
                    border-radius: 10px;
                    padding: 1rem;
                }

                svg{
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                }

                /* .bg{
                    display: none;
                    position:absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-color: rgba(248, 153, 64, 0.8);
                    border-radius: 0 0.5rem 0.5rem 0.5rem;
                    justify-content: center;
                    align-items: center;
                    ${Text({ size: '2rem', color: props => props.theme.white, weight: '700' })}

                } */

                + li {
                    margin-top: 2rem;
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

            .select{
                margin-top: 1rem;
                margin-bottom: 3rem;
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
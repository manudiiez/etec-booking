import React, { useState } from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme'

/* ------------------------------- RANGE-DATE ------------------------------- */
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../Loader';
import ItemModal from '../modal/ItemModal';
import ItemModuleSelect from './ItemModuleSelect';

const ItemModule = ({ data, loading, dates, setDates, isAvalible, handleSelect, handleClick, modal, changeModal, datesView, selectedModulesView, user, handleChangeSelect }) => {


    return (
        <Container>
            <div className="container-lg">
                <div className="module-container">
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDates(item.selection)}
                        moveRangeOnFirstSelection={false}
                        ranges={[dates]}
                        className="date"
                    />
                    <div className="module-list">
                        {
                            loading ? (
                                <Loader />
                            ) : (
                                <ul>
                                    {
                                        data.map(item => (
                                            <li key={item._id}>
                                                <span>{item.name}</span>
                                                <input type="checkbox" value={item._id} name={item.name} disabled={!isAvalible(item)} onChange={handleSelect} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </div>
                </div>
                <button className='button-send' onClick={changeModal}>Reservar</button>
                <ItemModal modal={modal} change={changeModal}>
                    <ModalBody>
                        <p className="title">
                            Realizar <span>Reserva</span>
                        </p>
                        <div>
                            <p>Dias</p>
                            <ul>
                                {
                                    datesView.map(date => (
                                        <li key={date}>{date}</li>
                                    ))
                                }
                            </ul>
                            <p>Modulos</p>
                            <ul>
                                {
                                    selectedModulesView.map(modulev => (
                                        <li key={modulev}>{modulev}</li>
                                    ))
                                }
                            </ul>
                            <p>Materia</p>
                            <ItemModuleSelect user={user} handleChangeSelect={handleChangeSelect} />
                            <button onClick={handleClick}>Confirmar reservar</button>
                        </div>
                    </ModalBody>
                </ItemModal>
            </div>
        </Container>
    )
}

export default ItemModule

const Container = styled.div`
    padding: 5rem 1rem;
    .container-lg{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .module-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3rem;
            margin-bottom: 2rem;
            .date{
                width: fit-content;
                max-width: calc(100vw - 2rem);
                height: 100%;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                border-radius: 10px;
                overflow: hidden;
            }
    
            .module-list{
                box-sizing: border-box;
                height: 385px;
                width: auto;
                min-width: 200px;
                max-width: 352px;
                background-color: ${props => props.theme.white};
                padding: 1rem;
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                ul{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    height: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;  
                    li{
                        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                        border-radius: 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 1rem;
                    }
                }
    
            }
        }

        .button-send{
            max-width: 746px;
            width: 100%;
            padding: 1rem 0;
            background-color: ${props => props.theme.orange};
            border: none;
            border-radius: 10px;
            ${Text({ size: '1rem', color: props => props.theme.white, weight: '600' })}

        }
    }

    @media (min-width: 768px) {
        padding: 7rem 1rem;
        .container-lg{
            .module-container{
                flex-direction: row;
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
    div{
        p{
            ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '600' })}
            text-align: center;
            margin: 0;
            margin-bottom: 1rem;
            margin-top: 2rem;
        }
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                width: auto;
                background-color: ${props => props.theme.white};
                padding: 1rem;
                border-radius: 10px;
                margin-bottom: 1rem;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                ${Text({ size: '1rem', color: props => props.theme.black, weight: '600' })}
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
            margin-top: 2rem;
            
        }
    }
`
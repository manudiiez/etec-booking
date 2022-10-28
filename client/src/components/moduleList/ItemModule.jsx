import React, { useState } from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme'
/* ------------------------------- RANGE-DATE ------------------------------- */
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Loader from '../Loader';

const ItemModule = ({data, loading, dates, setDates, isAvalible, handleSelect, handleClick}) => {
    

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
                                <Loader/>
                            ):(
                                <ul>
                                    {
                                        data.map(item => (
                                            <li key={item._id}>
                                                <span>{item.name}</span>
                                                <input type="checkbox" value={item._id} disabled={!isAvalible(item)} onChange={handleSelect} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </div>
                </div>
                <button className='button-send' onClick={handleClick}>Reservar</button>
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
            flex-direction: row;
            gap: 3rem;
            margin-bottom: 2rem;
            
            .date{
                width: fit-content;
                height: 100%;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                border-radius: 10px;
                overflow: hidden;
            }
    
            .module-list{
                box-sizing: border-box;
                height: 385px;
                width: 352px;
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
`
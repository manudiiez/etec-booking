import React, { useContext } from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { NavLink } from 'react-router-dom'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faList, faBook } from "@fortawesome/free-solid-svg-icons";
/* --------------------------------- CONTEXT -------------------------------- */
import { themeContext } from '../../context/ThemeContext';

const ItemSidebarContainer = () => {

    const {themeDark, themeLight} = useContext(themeContext)

    return (
        <Container>
            <div className="top">
                <h1 className='brand'>ETecBooking</h1>
                <h2 className='mobile'>ETB</h2>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <NavLink to='/'>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Inicio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/lab'>
                            <FontAwesomeIcon icon={faList} />
                            <span>Laboratorios</span>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/user'>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Usuarios</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/subject'>
                            <FontAwesomeIcon icon={faBook} />
                            <span>Materias</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className='light' onClick={themeLight}></div>
                <div className='dark' onClick={themeDark}></div>
            </div>
        </Container>
    )
}

export default ItemSidebarContainer
const Container = styled.div`
    width: 50px;
    height: calc(100% - 2rem);
    background-color: ${props => props.theme.bg_1};
    color: ${props => props.theme.color_1};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    /* overflow: hidden: */

    h1{
        display: none;
        text-align: center;
        width: 100%;
        margin: 0;
    }
    
    h2{
        text-align: center;
        width: 100%;
        margin: 0;
        /* display: none; */
    }

    .top, .center, .bottom{
        width: 100%;
        padding: 10px 0;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #4b4b4b;
    }

    ul{
        list-style: none;
        width: 100%;
        margin:0;
        padding: 0;
        li{
            width: auto;
            margin: 1rem 0;
            border-radius: 10px;
            overflow: hidden;
            a{
                padding: 1rem;
                display: block;
                color: ${props => props.theme.color_1};
                text-decoration: none;
                &.active{
                    background-color: ${props => props.theme.bg_2};
                }
                
                &:hover{
                    background-color: ${props => props.theme.bg_2};
                }
                svg{
                    margin-right: .5rem;
                    font-size: 1.5rem;
                }
                
                span{
                    font-size: 1.3rem;
                    display: none;
                }
            }
        }
    }

    .bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        div{
            width: 20px;
            height: 20px;
            border-radius: 5px;
            border: 1px solid #4b4b4b;
            &.dark{
                background-color: #374151;
            }
            &.light{
                background-color: #d1d5db;
            }
        }
    }

  @media (min-width: 768px){
    width: 180px;
    h1{
        display: block;
    }
    h2{
        display: none;
    }
    ul{
        li{
            a{
                span{
                    display: inline-block;
                }
            }
        }
    }
  }
`
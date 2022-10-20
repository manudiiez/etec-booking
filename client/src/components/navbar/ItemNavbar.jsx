import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */

const ItemNavbar = ({ themeToggler }) => {

    return (
        <Container>
            <nav>
                <div className="container-lg">
                    <h1>ETecBooking</h1>
                    <ul>
                        <li onClick={themeToggler}>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.5V3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5Z" /></svg>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
    )
}

export default ItemNavbar

const Container = styled.header`
    height: 50px;
    width: 100%;

    nav{
        background: ${props => props.theme.bg_1};
        padding: 0 1rem;
        height: 50px;
        width: calc(100% - 2rem);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 300;
        border-bottom: 0.1px solid ${props => props.theme.color_3};
        
        .container-lg{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h1{
                color: ${props => props.theme.color_3};
                font-size: 1.3rem;
                font-weight: 500;
            }
            ul{
                list-style: none;
                margin: 0;
                padding: 0;
                li{
                    svg{
                        fill: ${props => props.theme.color_3};
                        cursor: pointer;
                    }
                }
            }
        }
    }
`
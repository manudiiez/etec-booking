import React from 'react'
/* --------------------------- STYLLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import {Text} from '../../theme/theme.js'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Link } from 'react-router-dom'
import ItemDropdown from '../dropdown/ItemDropdown.jsx'

const ItemNavbar = ({user}) => {
  return (
    <Container>
        <div className='container'>
            <nav className="container-lg">
                <Link to='/'>EtecBooking</Link>
                {/* <Link to={'/'}>Inicio</Link> */}
                {
                    user && <ItemDropdown/>
                }
            </nav>
        </div>
    </Container>
  )
}

export default ItemNavbar

const Container = styled.div`
    
    height: 50px;
    width: 100%;
    .container{
        padding: 0 1rem;
        background-color: ${props => props.theme.white_2};
        border-bottom: 1px solid ${props => props.theme.orange};
        position: fixed;
        top: 0;
        left: 0;
        width: calc(100% - 2rem);
        height: 50px;
        nav{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                ${Text({ size: '1.3rem', color: props => props.theme.orange, weight: '600' })}
                margin: 0;
                text-decoration: none;

            }
            .user-container{
                /* width: 30px;
                height: 30px;
                background-color: red;
                border-radius: 50%; */
            }
        }
    }

    @media (min-width: 768px) {
        height: 70px;
        .container{
            height: 70px;
            nav{
                a{
                    font-size: 1.5rem;
                }
            }
        }
    }

`
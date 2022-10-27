import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import {Text} from '../theme/theme'

const ItemFooter = () => {
  return (
    <Container>
        <div className="container-lg">
            <h6>ETecBooking</h6>
            <p>manudiiez_design</p>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="location"><path d="M16,1A11,11,0,0,0,5,12C5,23.24,15,30.51,15.42,30.81a1,1,0,0,0,1.16,0C17,30.51,27,23.24,27,12A11,11,0,0,0,16,1Zm0,16a5,5,0,1,1,5-5A5,5,0,0,1,16,17Z"/></g></svg>
        </div>
    </Container>
  )
}

export default ItemFooter

const Container = styled.footer`
    width: calc(100% - 2rem);
    padding: 2rem 1rem;
    background-color: ${props => props.theme.black};
    .container-lg{
        height: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        text-align: center;
        gap: 1rem;
        h6{
            ${Text({ size: '1.5rem', color: props => props.theme.orange, weight: '400' })}
            margin: 0;
            width: 100%;
        }
        p{
            ${Text({ size: '1rem', color: props => props.theme.white, weight: '400' })}
            margin: 0;
        }
        svg{
            width: 20px;
            height: 20px;
            fill: red;
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        .container-lg{
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(1, 1fr);
            h6{
                text-align: start;
            }
            svg{
                justify-self: end;
            }
        }
    }
`
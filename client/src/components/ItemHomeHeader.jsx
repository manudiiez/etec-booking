import React from 'react'
/* --------------------------- STYLLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import {Text} from '../theme/theme'

/* ----------------------------------- IMG ---------------------------------- */
import img from '../img/header1.jpg'


const ItemHomeHeader = () => {
  return (
    <Container>
        <div className="container-lg">
            <div className='body'>
                <h1>Reservas rapidas, sencillas y efectivas </h1>
                <h2>Una aplicacion para facilitar la organizacion de las reservas de los laboratrorios</h2>
                <button>Reservar</button>
            </div>
            <div className='img'>
                <img src={img} alt="" />
            </div>
        </div>
    </Container>
  )
}

export default ItemHomeHeader

const Container = styled.section`
    padding: 5rem 1rem;
    background-color: ${props => props.theme.white_2};
    .container-lg{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        .body{
            height: 100%;
            width: 100%;

            text-align: center;
            h1{
                ${Text({ size: '2.3rem', color: props => props.theme.orange, weight: '600' })}
                margin: 0;
                margin-bottom: 1.5rem;
            }
            h2{
                ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '400' })}
                margin: 0;
                margin-bottom: 1.5rem;

            }

            button{
                width: 200px;
                background-color: ${props => props.theme.orange};
                ${Text({ size: '1rem', color: props => props.theme.white, weight: '600' })}
                padding: 1rem 0;
                border: none;
                cursor: pointer;
            }
        }
        .img{
            height: 100%;
            width: 100%;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
        }
    }

    @media (min-width: 768px) {
        padding: 7rem 1rem;
        .container-lg{
            flex-direction: row;
            .body{
                text-align: start;
                h1{
                    font-size: 3rem;
                }
                h2{
                    font-size: 2rem;
                }
                button{
                    font-size: 2rem;
                }
            }
        }
    }
`
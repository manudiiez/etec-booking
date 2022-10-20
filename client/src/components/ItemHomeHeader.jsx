import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const ItemHomeHeader = () => {
  return (
    <Container>
        <div className="container-lg">
            <h1>Aplicacion de reservas unica</h1>
            <h2>Una aplicacion para facilitar la organizacion de las reservas de los laboratrorios</h2>
            <button>Reservar</button>
        </div>
    </Container>
  )
}

export default ItemHomeHeader

const Container = styled.section`
    
    background-color: ${props => props.theme.bg_1};
    padding: 0 1rem;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 5rem 0; 
        h1{
            margin:0;
            color: ${props => props.theme.color_3};
            text-align: center;
            font-size: 2.5rem;
            font-weight: 600;
        }

        h2{
            margin: 0;
            color: ${props => props.theme.color_1};
            text-align: center;
            font-size: 1.2rem;
            font-weight: 400;
            margin-top: 2rem;
            width: 100%;
            max-width: 750px;
        }

        button{
            width: 100%;
            max-width: 200px;
            background-color: ${props => props.theme.color_3};
            border: none;
            padding: 1.2rem 0;
            color: ${props => props.theme.color_1};
            font-weight: 700;
            margin-top: 2rem;
            border-radius: 5px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                transform: scale(1.05);
            }
        }
    }

    @media (min-width: 768px) {
        div{
            padding: 10rem 0; 
            h1{
                font-size: 4rem;
            }
            h2{
                font-size: 2rem;
            }
            button{
                margin-top: 4rem;
                font-size: 2rem;
            }
        }
    }

`
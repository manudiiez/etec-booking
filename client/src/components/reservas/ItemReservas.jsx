import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* --------------------------- REACTR-ROPUTER-DOM --------------------------- */
import { useNavigate } from 'react-router-dom'

const ItemReservas = ({ item }) => {

    const navigate = useNavigate()

    return (
        <Container onClick={() => {navigate(`lab/${item._id}`)}}>
            <img src='https://ipsst.gov.ar/wordpress/wp-content/uploads/2020/05/laboratorio-2-660x441.jpg' alt="" />
            {/* <img src={item.img} alt="" /> */}
            <div className="body">
                {/* <h3>Laboratorio de informatica</h3> */}
                <h3>{item.name}</h3>

                {/* <h4>Laboratorio con 30 computadoras listas para ser usadas sdasd asdasdasdasdasddsfasdasdasddddd</h4> */}
                <h4>{item.title}</h4>
                {/* <p>Categoria: <span>Informatica</span></p> */}
                <p>Categoria: <span>{item.type}</span></p>
            </div>
        </Container>
    )
}

export default ItemReservas

const Container = styled.div`
    box-sizing: border-box;
    background-color: ${props => props.theme.bg_3};
    padding: 1.5rem;
    border-radius: 5px;
    color: ${props => props.theme.color_1};
    height: 100%;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.03);
    }

    img{
        border-radius: 5px;
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .body{
        margin-top: 2rem;
        h3{
            font-size: 1.4rem;
            margin: 0;
            font-weight: 600;
            color:${props => props.theme.color_4};
        }

        h4{
            font-size: 1.1rem;
            font-weight: 400; 
            margin: 0;
            margin-top: 1rem;
        }

        p{
            font-size: 1.2rem;
            font-weight: 400;
            margin: 0;
            margin-top: 2rem;

            span{
                font-weight: 700;
            } 
        }
    }

    @media (min-width: 768px) {
        padding: 2rem;
        border-radius: 10px;

        img{
            border-radius: 10px;
            height: 330px;
        }

        .body{
            h3{
                font-size: 2rem;
            }
            h4{
                font-size: 1.5rem;
            }
            p{
                font-size: 1.5rem;
            }
        }
            
    }

`
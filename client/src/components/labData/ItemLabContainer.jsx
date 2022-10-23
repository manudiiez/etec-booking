import React from 'react'
/* --------------------------- STYLÑED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const ItemLabContainer = ({ data }) => {
    return (
        <Container>
            <h1>{data.name}</h1>
            <div className="content">
                <div className="img">
                    <img src="" alt="" />
                </div>
                <div className="text">
                    <h2>{data.title}</h2>
                    <h3>{data.desc}</h3>
                    <h4>Categoria: <span>{data.type}</span></h4>
                    <button>Realizar reserva</button>
                </div>
            </div>
        </Container>
    )
}

export default ItemLabContainer

const Container = styled.div`
    padding: 5rem 0;
    h1{
        font-size: 1.5rem;
        color: ${props => props.theme.color_3};
        margin: 0;
        text-align: center;
        font-weight: 600;
    }

    .content{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .img{
            width: 100%;
            height: 250px;
            background-color: red;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
        }

        .text{
            color: ${props => props.theme.color_1};
            width:100%;
            h2{
                font-size: 1.3rem;
                font-weight: 600;
                margin: 0;
                margin: 1.5rem 0;
            }
            h3{
                font-size: 1.2rem;
                font-weight: 400;
                margin: 0;
                margin-bottom: 1.5rem;
            }
            h4{
                font-size: 1.2rem;
                font-weight: 400;
                margin: 0;
                margin-bottom: 1.5rem;

                span{
                    color: ${props => props.theme.color_3};
                    font-weight: 700;
                }
            }

            button{
                width: 100%;
                padding: 1rem 0;
                background-color: ${props => props.theme.color_3};
                color: ${props => props.theme.color_1};
                font-weight: 600;
                border: none;
                border-radius: 5px;
                transition: all .3s ease-in-out;
                cursor: pointer;
                &:hover{
                    transform: scale(1.03);
                }

            }
        }
    }
    

    @media (min-width: 768px) {
        padding: 10rem 0;
        h1{
            font-size: 2.5rem;
        }

        .content{
            flex-direction: row;
            gap: 2rem;
            .img{
                height: 320px;
            }

            .text{
                h2{
                    font-size: 1.5rem;
                }
                h3{
                    font-size: 1.3rem;
                }
                h4{
                    font-size: 1.3rem;
                }

                button{
                    font-size: 1.5rem;
                }

            }
        }   
    }

`
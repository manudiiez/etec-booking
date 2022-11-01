import React from 'react'
/* --------------------------- STYLLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom';

/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../Loader'

const ItemLabList = ({ data, loading, reFetch }) => {

    const navigate = useNavigate()

    return (
        <Container>
            <div className="container-lg">
                <h3>Reservar</h3>
                <div className="container-list">
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            <div className='card-list'>
                                {
                                    data.map(item => (
                                        <div className="card" key={item._id} onClick={() => {navigate(`/lab/${item._id}`)}} >
                                            <div className="img">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="text">
                                                <h4>{item.name}</h4>
                                                <h5>{item.title}</h5>
                                                <p>Categoria: <span>{item.type}</span></p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </Container>
    )
}

export default ItemLabList

const Container = styled.section`

    background-color: ${props => props.theme.white};
    padding: 5rem 1rem;

    .container-lg{
        h3{
            ${Text({ size: '2.5rem', color: props => props.theme.black, weight: '600' })}
            text-align: center;
            margin: 0;
            margin-bottom: 2rem;
        }

        .card-list{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            .card{
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                padding: 1rem;
                border-radius: 10px;
                transition: all .3s ease-in-out;
                &:hover{
                    transform: scale(1.03);
                }

                .img{
                    height: 200px;
                    img{
                        border-radius: 10px;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .text{
                    padding-top: 1rem;
                    h4{
                        ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '600' })}
                        margin: 0;
                        margin-bottom: 1rem;
                    }
                    h5{
                        ${Text({ size: '1.3rem', color: props => props.theme.gray, weight: '400' })}
                        margin: 0;
                        margin-bottom: 1rem;
                    }
                    p{
                        ${Text({ size: '1rem', color: props => props.theme.black, weight: '400' })}
                        margin: 0;
                        span{
                            ${Text({ size: '1rem', color: props => props.theme.orange, weight: '700' })}
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        padding: 7rem 1rem;
        .container-lg{
            h3{
                font-size: 3rem;
                margin-bottom: 3rem;

            }

            .card-list{
                grid-template-columns: repeat(3, 1fr);
                .card{
                    &:hover{
                        transform: scale(1.05);
                    }
                    .img{
                        height: 230px;
                    }
                }
            }
        }
    }

`
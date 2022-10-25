import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const ItemNavbar = () => {
    return (
        <Container>
            <div className="content">
                <div className='body'>
                    <p className='username'>manudiiez</p>
                    <div className='img'>
                        <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="" />
                    </div>
                </div>
                <div className="dropdown">
                    <ul>
                        <li>
                            <button>Ver perfil</button>
                        </li>
                        <li>
                            <button>Cerrar sesion</button>
                        </li>
                    </ul>
                </div>

            </div>
        </Container>
    )
}

export default ItemNavbar

const Container = styled.div`
    
    width: calc(100% - 2rem);
    height: 62px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 1rem;
    background-color: ${props => props.theme.bg_1};
    color: ${props => props.theme.color_1};

    .content{
        position: relative;
        .body{
            display: flex;
            justify-content: center;
            align-items: center;
            .username{
                font-size: 1.5rem;
                margin-right: 1rem;
                display: none;
            }
            .img{
                width: 30px;
                height: 30px;
                border: 1px solid ${props => props.theme.bg_2};
                border-radius: 50px;
                img{
                    width: 100%;
                    object-fit: cover;
                }
            }
        }

        &:hover{
            .dropdown{
                height: fit-content;
            }
        }

        .dropdown{
            position: absolute;
            right: 0;
            top: 148%;
            height: 0;
            overflow: hidden;
            background-color: ${props => props.theme.bg_2};
            ul{
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: 0;
                padding: .5rem;
                width: 100px;
                gap: .5rem;
                li{
                    width: 100%;
                    button{
                        width: 100%;
                        background-color: ${props => props.theme.bg_1};
                        border: none;
                        padding: .5rem 0;
                        color: ${props => props.theme.color_1};
                    }
                }
            }
        }
    }

    @media (min-width: 768px){
        height: 70px;
        .content{
            .body{

                .username{
                    display: inline-block;
                }
            }

            .dropdown{
                top: 100%;
            }
        }
    }
`
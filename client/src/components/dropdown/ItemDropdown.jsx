import React from 'react'
import styled from 'styled-components'

const ItemDropdown = () => {
    return (
        <Container>
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUftCQRgVcLNy-j4C7bqsTDftnYMAE7z-AA&usqp=CAU" alt="" />
                <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/><path d="M0-.75h48v48h-48z" fill="none"/></svg>
            </div>
            <div className="dropdown">
                <ul>
                    <li>
                        <button>Hola</button>
                    </li>
                    <li>
                        <button>Hola</button>
                    </li>
                    <li>
                        <button>Hola</button>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default ItemDropdown

const Container = styled.div`
    background-color: ${props => props.theme.white_2};
    position: relative;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .img{
        width: 30px;
        height: 30px;
        position: relative;
        img{
            border-radius: 50%;
            width: 100%;
            object-fit: cover;
        }
        svg{
            position: absolute;
            top: 0;
            left: 40%;
            width: 30px;
        }
    }

    .dropdown{
        display: none;
        width: 200px;
        position: absolute;
        right: 0;
        top: 80%;
        background-color: ${props => props.theme.orange};
        border-radius: 10px;
        border-top-right-radius: 0;
        ul{
            list-style: none;
            width: 100%;
            margin: 0;
            padding: 0;
            padding: 0 1rem;
            padding-top:1rem;
            li{
                button{
                    width: calc(100% - 2rem);
                    margin-bottom: 1rem;
                    padding: 1rem;
                    background-color: ${props => props.theme.white_2};
                    border: none;
                    cursor: pointer;
                }
            }
        }
    }

    &:hover{
        background: linear-gradient(180deg, #FEFBF6 50%, #F89A40 100%);
        .dropdown{
            display: block;
        }
    }

`
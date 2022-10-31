import React, { useState } from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme';

const ItemModal = ({ children, change, modal }) => {

    return (
        <Container className={modal && 'active'}>
            <div className="modal">
                <div className='content scollbar'>
                    {children}
                </div>
            </div>
            <div className="bg" onClick={change}></div>
        </Container>
    )
}

export default ItemModal

const Container = styled.div`

    
    .bg{
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        top: 0;
        left: 0;
        z-index: 500;
    }

    .modal{
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        height: 70%;
        background-color: ${props => props.theme.white_2};
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        bottom: -100%;
        right: 0;
        z-index: 501;
        padding: 2rem 1rem;
        opacity: 0;
        transition: all .6s ease-in-out;
        .content{
            padding: 0 1rem;
            height: 100%;
            overflow-y: scroll;
        }
    }


    @media (min-width: 768px) {
        .modal{
            width: 300px;
            height: 100%;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            right: -100%;
            bottom: 0;
        }
    }

    &.active{

        .modal{
            opacity: 1;
            bottom: 0;
            @media (min-width: 768px) {
                right: 0;
            }

        }

        .bg{
            display: block;
        }

    }

`


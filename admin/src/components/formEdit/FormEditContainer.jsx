import React from 'react'
import styled from 'styled-components'


const FormEditContainer = ({children, modal, change}) => {
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

export default FormEditContainer

const Container = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height .3s ease-in-out;
    &.active{
        max-height: 1000px;
    }

`
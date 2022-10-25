import React from 'react'
import styled from 'styled-components'
import ItemNavbarContainer from '../navbar/ItemNavbarContainer'
import ItemSidebarContainer from '../sidebar/ItemSidebarContainer'

const DefaultContainer = ({ children }) => {
    return (
        <>
            <ItemNavbarContainer/>
            <ItemSidebarContainer />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default DefaultContainer

const Container = styled.div`
    
    margin-top: 62px;

`
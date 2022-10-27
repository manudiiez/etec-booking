import React from 'react'
/* --------------------------- STYLLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemHomeHeader from '../../components/ItemHomeHeader'
import ItemLabListContainer from '../../components/labList/ItemLabListContainer'

const Home = () => {
  return (
    <Container>
      <ItemHomeHeader/>
      <ItemLabListContainer/>
    </Container>
  )
}

export default Home

const Container = styled.main`
    
`
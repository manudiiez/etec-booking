import React from 'react'
import ItemChartContainer from '../components/ItemChartContainer'
import styled from 'styled-components'
import ItemLineChartContainer from '../components/ItemLineChartContainer'

const Home = () => {
  return (
    <Container>
      <ItemChartContainer/>
      <ItemLineChartContainer/>
    </Container>
  )
}

export default Home

const Container = styled.div`


`
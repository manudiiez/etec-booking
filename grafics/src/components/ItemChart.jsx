import React from 'react'
import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'

const ItemChart = ({data, loading, labels, options}) => {
  return (
    <Container>
        {
            loading ? (
                <p>loading...</p>
            ):(
                <Bar options={options} data={{labels: labels, datasets: data}} />
            )
        }
    </Container>
  )
}

export default ItemChart

const Container = styled.div``
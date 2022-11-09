import React from 'react'
import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'
import Loader from '../Loader'

const ItemChart = ({ data, loading, labels, options }) => {
  return (
    <Container>
      {
        loading ? (
          <Loader/>
        ) : (
          <Bar options={options} data={{ labels: labels, datasets: data }} />
        )
      }
    </Container>
  )
}

export default ItemChart

const Container = styled.div`

  flex: 4;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  color: gray;

` 
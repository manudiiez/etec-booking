import React from 'react'
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components'
import Loader from '../Loader'

const labels = ['Informatica', 'Electronica', 'Otros'] 


const ItemPieChart = ({data, loading}) => {
  return (
    <Container>
        {
            loading ? (
                <Loader/>
            ):(
                <>
                    <p className="title">Tipos de reservas</p>
                    <Pie data={{labels: labels, datasets: data}} />
                </>
            )
        }
    </Container>
  )
}

export default ItemPieChart

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;

    .title{
        text-align: center;
        padding: 7px 0;
    }
`
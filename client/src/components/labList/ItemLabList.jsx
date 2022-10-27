import React from 'react'
/* --------------------------- STYLLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../Loader'

const ItemLabList = ({data, loading, reFetch}) => {
  return (
    <Container>
        <div className="container-lg">
            <h3>Reservar</h3>
            <div className="container-list">
                {
                    loading ? (
                        <Loader/>
                    ):(
                        <div>
                            {
                                data.map(item => (
                                    <p>{item.name}</p>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    </Container>
  )
}

export default ItemLabList

const Container = styled.section`

    background-color: ${props => props.theme.white};

`
import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../Loader'

const ItemSubjectList = ({data, loading, error}) => {
  return (
    <Container>
        <div className="container-lg">
            {
                loading ? (
                    <Loader/>
                ):(
                    data.map(subject => (
                        <p>{subject.name}</p>
                    ))
                )
            }
        </div>
    </Container>
  )
}

export default ItemSubjectList

const Container = styled.div`
    padding: 5rem 1rem;  
    .container-lg{

    }

`
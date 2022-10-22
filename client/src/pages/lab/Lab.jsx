import React from 'react'
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from "../../hooks/useFetch.js";
/* --------------------------- styled-componentrs --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useParams } from 'react-router-dom';
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../../components/Loader.jsx';
import ItemLabContainer from '../../components/labData/ItemLabContainer.jsx';

const Lab = () => {

    const { id } = useParams();

    const { data, loading, reFetch } = useFetch(`/lab/${id}`);

    return (
        <Container>
            <div className="container-lg">
                {
                    loading ? (
                        <Loader/>
                    ):(
                        <ItemLabContainer data={data} />
                    )
                }
            </div>
        </Container>
    )
}

export default Lab

const Container = styled.div`
    
    background-color: ${props => props.theme.bg_1};
    padding: 0 1rem;
`
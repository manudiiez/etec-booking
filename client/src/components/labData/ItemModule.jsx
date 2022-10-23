import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components';
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../Loader'

const ItemModule = ({ data, loading, error, isAvalible, handleSelect }) => {
    return (
        <Container>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <ul>
                        {data.map((item) => (
                            <li key={item._id}>
                                {item.name}
                                <input type="checkbox" value={item._id} disabled={!isAvalible(item)} onChange={handleSelect}  />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </Container>
    )
}

export default ItemModule

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.color_2};
    color: #fff;
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        list-style: none;
        justify-items: center;
        align-content: center;
        margin: 0;
        padding: 1rem;
        gap: 1rem;
        li{
            width: auto;
            padding: 1rem;
            background-color: #cacaca;
            border-radius: 5px;
            color: #5f5f5f;
            font-weight: 700;
        }
    }
`
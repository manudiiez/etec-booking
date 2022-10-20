import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------ REACT-SELECT ------------------------------ */
import Select from 'react-select'
import Loader from '../Loader'
import ItemReservas from './ItemReservas'


const options = [
    { value: 'informatica', label: 'Informatica' },
    { value: 'electronica', label: 'Electronica' },
    { value: 'otros', label: 'Otros' }
]

const ItemReservasList = ({ loading, data, reFetch }) => {
    return (
        <Container>
            <div className="container-lg">
                <h1>Materias</h1>
                <Select className='selectable' options={options} />
                { loading ? (
                        <Loader />
                    ):(
                        <List>
                            {
                                data.map(item => (
                                    <ItemReservas key={item._id} item={item}/>
                                ))
                            }
                        </List>
                    )
                } 
            </div>
        </Container>
    )
}

export default ItemReservasList

const Container = styled.div`
    background-color: ${props => props.theme.bg_2};
    padding: 0 1rem;
    .container-lg{
        padding: 5rem 0;
        h1{
            font-size: 2.5rem;
            margin: 0;
            font-weight: 600;
            text-align: center;
            color: ${props => props.theme.color_4};
        }

        .selectable{
            width: calc(100% - 2rem);
            margin: 0 auto;
            margin-top: 3rem;
            .css-1s2u09g-control{
                background-color: ${props => props.theme.bg_3};
                border: none;
            }
            .css-qc6sy-singleValue{
                color: ${props => props.theme.color_2};
            }
        }

        
        @media (min-width: 768px) {
            padding: 10rem 0;
            h1{
                font-size: 3rem;
            }
            .selectable{
                width: calc(100% - 4rem);
            }
            
        }
    }

`
const List = styled.div`
    margin-top: 2rem;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

`
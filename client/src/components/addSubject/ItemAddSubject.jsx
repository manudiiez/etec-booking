import React from 'react'
/* ---------------------------- STYLED-COMPONETS ---------------------------- */
import styled from 'styled-components'
import { Text } from '../../theme/theme'
/* ------------------------------ REACT-SELECT ------------------------------ */
import Select from 'react-select';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemModal from '../modal/ItemModal'

const options = [
    { value: 'informatica', label: 'Informatica' },
    { value: 'electronica', label: 'Electronica' },
    { value: 'otros', label: 'Otros' }
]

const ItemAddSubject = ({modal, changeModal, subjectData, handleChange, changeSelect, submit, errorMsj}) => {
  return (
    <Container>
        <ItemModal modal={modal} change={changeModal}>
            <ModalBody>
                <p className="title">
                    Añadir <span>Materia</span>
                </p>
                <form className='form'>
                    <div className="controls">
                        <label>Nombre de la materia</label>
                        <input type="text" value={subjectData.name} name='name' required onChange={handleChange}  />
                    </div>
                    <div className="controls">
                        <label>Año</label>
                        <input type="number" name='age' value={subjectData.age} required onChange={handleChange}  />
                    </div>
                    <div className="controls">
                        <label>Tipo</label>
                        <Select className='select' options={options} onChange={changeSelect} />
                    </div>
                    {
                        errorMsj && <p className='error'>{errorMsj}</p>
                    }
                    <button type='submit' onClick={submit}>Añadir</button>
                </form>
            </ModalBody>
        </ItemModal>
        <div className="container-lg">
            <button className='add-subject' onClick={changeModal}>Añadir materia</button>
        </div>
    </Container>
  )
}

export default ItemAddSubject

const Container = styled.div`
    padding: 1rem;
    .container-lg{
        .add-subject{
            width: 100%;
            padding: 1rem 0;
            border-radius: 10px;
            border: none;
            box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
            background-color: ${props => props.theme.orange};
            ${Text({ size: '1rem', color: props => props.theme.white, weight: '600' })}
            cursor: pointer;
        }
    }
    

`
const ModalBody = styled.div`
    width: 100%;
    .title{
        ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '600' })}
        text-align: center;
        span{
            color: ${props => props.theme.orange};
        }
        margin-bottom: 3rem;
    }
    .form{
        .controls{
            label{
                ${Text({ size: '1.3rem', color: props => props.theme.orange, weight: '600' })}
            }
            input{
                box-sizing: border-box;
                width: 100%;
                padding: 1rem;
                margin-top: 1rem;
                margin-bottom: 2rem;
                border: none;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                border-radius: 10px;

            }

            .select{
                margin-top: 1rem;
                margin-bottom: 3rem;
            }
        }

        .error{
            ${Text({ size: '1rem', color: props => props.theme.red, weight: '600' })}
            text-align: center;
        }

        button{
            width: 100%;
            padding: 1rem 0;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            border-radius: 10px;
            background-color: ${props => props.theme.orange};
            ${Text({ size: '1rem', color: props => props.theme.white_2, weight: '600' })}
            
        }
    }
`
import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------- REACT-OUTER-DOM ---------------------------- */
import { Link } from 'react-router-dom'

const ItemSignIn = ({ handleChange, handleClick, loading,error }) => {
  return (
    <Container>
      <div className="container-lg">
        <h1>Bienvenido a la aplicacion de reservas del colegio ETec</h1>
        <div className='container-form'>
          <div className="header">
            <div></div>
            <p>Iniciar sesion</p>
            <div></div>
          </div>
          <form>
            <div>
              <label>Nombre de usuario <span>*</span></label>
              <input type="text" name="username" placeholder='Nombre de usuario' onChange={handleChange} />
            </div>
            <div>
              <label>Contraseña <span>*</span></label>
              <input type="password" name="password" placeholder='Contraseña' onChange={handleChange} />
            </div>
            {
              error && <p className='error'>{error.message}</p>
            }
            
            <button type='submit' disabled={loading} onClick={handleClick}><span>Iniciar sesion</span></button>
            <p>Todavia no tiene un usuario? <Link to='signup'>Registrarse</Link></p>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default ItemSignIn

const Container = styled.section`
  background: ${props => props.theme.bg_1};
  padding: 50px 1rem;
  h1{
    color: ${props => props.theme.color_1};
    margin: 0 auto;
    text-align: center;
    max-width: 768px;
    width: 100%;
    font-size: 2rem;
    font-weight: 800;
  }
  @media (min-width: 768px){
    padding: 100px 1rem;
    h1{
      font-size: 3.7rem;
    }

  }

  .container-form{
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 5rem;
    .header{
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div{
        width: 75%;
        border-bottom: 1px dashed ${props => props.theme.color_2};
      }
      p{
        color: ${props => props.theme.color_2};
        width: 100%;
        text-align: center;
        padding: 0 1rem;
        font-size: 1rem;
        margin: 0;
      }
    }

    form{
      margin-top: 1rem;
      div{ 
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        margin-top: 1rem;
        label{
          color: ${props => props.theme.color_1};
          font-size: 1.3rem;
          font-weight: 400;
          span{
            color: #d10000;
          }
        }
        input{
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid ${props => props.theme.color_2};
          background-color: transparent;
          color: ${props => props.theme.color_1};
          
        }
      }
      p{
        color: ${props => props.theme.color_2};
        text-align: center;
        font-size: 1rem;
        margin-top: 1rem;
        a{
          color: ${props => props.theme.color_3};
          text-decoration: none;
          font-weight: 600;
          &:hover{
            text-decoration: underline;
          }
        }

        &.error{
          color: #d10000;
          font-weight: 600;
        }
      }

      button{
        width: 100%;
        padding: 1rem 0;
        color: #fff;
        background: ${props => props.theme.color_3};
        border: none;
        margin-top: 2rem;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        span{
          position: relative;
          z-index: 10;
          font-weight: 600;
        }
        &::before{
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 100%;
          left: 0;
          background-color: red;
          transition: all .3s ;
          background: ${props => props.theme.color_1};
        }
        &:hover{
          &::before{
            top: 0;
          }
          color: ${props => props.theme.bg_1};
        }
      }
    }
  }
`
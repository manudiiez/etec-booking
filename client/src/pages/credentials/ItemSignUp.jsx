import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------- REACT-OUTER-DOM ---------------------------- */
import { Link } from 'react-router-dom'

const ItemSignUp = ({ handleChange, handleClick, loading, error, setConfirmPassword }) => {

  // const handleValidateInput = (e) => {

  //   carrito__card__form.tarjetaNombreInput.value = valorInput
  //   .replace(/[0-9]/g, '')

  // }

  return (
    <Container>
      <div className="container-lg">
        <h1>Bienvenido a la aplicacion de reservas del colegio ETec</h1>
        <div className='container-form'>
          <div className="header">
            <div></div>
            <p>Registrese con su email</p>
            <div></div>
          </div>
          <form onSubmit={handleClick}>
            <div>
              <label>Nombre y apellido <span>*</span></label>
              <input type="text" placeholder='Nombre completo' name='fullname' onChange={handleChange} pattern="[a-zA\s]" />
            </div>
            <div>
              <label>Nombre de usuario <span>*</span></label>
              <input type="text" placeholder='Nombre con el que va a ingresar a la plataforma' name='username' onChange={handleChange} />
            </div>
            <div>
              <label>Email <span>*</span> <span>(unicamente mail institucional)</span></label>
              <input type="email" placeholder='Email' name='email' onChange={handleChange} pattern=".+@[eE][tT][eE][cC][.][uU][mM][.][eE][dD][uU][.][aA][rR]" />
            </div>
            <div>
              <label>Contraseña <span>*</span></label>
              <input type="password" placeholder='Contraseña' name='password' onChange={handleChange} />
            </div>
            <div>
              <label>Confirmar contraseña <span>*</span></label>
              <input type="password" placeholder='Confirmar contraseña' onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {
              error && <p className='error'>{error.message}</p>
            }
            <button type='submit' disabled={loading}><span>Registrarse</span></button>
            <p>Ya esta registrado? <Link to='/'>Inicie sesion</Link></p>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default ItemSignUp

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
        width: 50%;
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
            &:nth-child(2){
              font-size: .8rem;
              color: ${props => props.theme.color_2};

            }
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
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin-top: 2rem;

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
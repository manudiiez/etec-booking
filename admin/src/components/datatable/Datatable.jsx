import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from '../../hooks/useFetch'
import axios from "axios";
import Swal from 'sweetalert2'


/* ---------------------------- styled-components --------------------------- */
import styled from 'styled-components'
import Loader from "../Loader";

const Datatable = ({ columns, title }) => {
  const location = useLocation()
  const path = location.pathname.split('/')[1];

  const { data, loading, error, reFetch } = useFetch(`/${path}/`)

  const handleDelete = async (id) => {
    console.log(id)
    Swal.fire({
      title: 'Estas seguro??',
      text: "No hay vuelta atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/${path}/${id}`)
          Swal.fire(
            'Eliminado!',
            'Tu reserva fue eliminada.',
            'success'
          )
          reFetch()
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message,
            confirmButtonText: 'Continuar'
          })
        }
      }
    })
  };

  const writeTable = () => {
    const list = data.map(item => {
      return { id: item._id, ...item };
    });
    console.log(list)
    return (
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    )
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Editar</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Eliminar
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <Container className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to={`/${path}/new`} className="link">
          Crear
        </Link>
      </div>
      {
        loading ? (
          <Loader />
        ) : (
          writeTable()
        )
      }
      
    </Container>
  );
};

export default Datatable;

const Container = styled.div`
  height: 600px;
  padding: 20px;
  
  .datatableTitle{
    width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .link{
      text-decoration: none;
      color: green;
      font-size: 16px;
      font-weight: 400;
      border: 1px solid green;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .cellWithImg {
    display: flex;
    align-items: center;

    .cellImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
    }
  }

  .cellWithStatus {
    padding: 5px;
    border-radius: 5px;

    &.active {
      background-color: rgba(0, 128, 0, 0.05);
      color: green;
    }
    &.pending {
      background-color: rgba(255, 217, 0, 0.05);
      color: goldenrod;
    }
    &.passive {
      background-color: rgba(255, 0, 0, 0.05);
      color: crimson;
    }
  }

  .cellAction {
    display: flex;
    align-items: center;
    gap: 15px;

    .viewButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: darkblue;
      border: 1px dotted rgba(0, 0, 139, 0.596);
      cursor: pointer;
    }
    
    .deleteButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: crimson;
      border: 1px dotted rgba(220, 20, 60, 0.6);
      cursor: pointer;
    }
  }

`
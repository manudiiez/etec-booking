export const userColumns = [
  {
    field: "username",
    headerName: "Nombre de usuario",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "fullname",
    headerName: "Nombre completo", 
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  }
];
export const labColumns = [
  {
    field: "name",
    headerName: "Nombre del laboratorio",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "type",
    headerName: "Tipo", 
    width: 100,
  },
  {
    field: "title",
    headerName: "Titulo",
    width: 300,
  }
];
export const subjectColumns = [
  {
    field: "name",
    headerName: "Laboratorio",
    width: 230,
  },
  {
    field: "type",
    headerName: "Tipo", 
    width: 100,
  },
  {
    field: "title",
    headerName: "Titulo",
    width: 300,
  }
];

//temporary data


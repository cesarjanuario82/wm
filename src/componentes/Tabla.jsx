
import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';



export const Tabla = React.memo( ({tabla}) => {


    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'estatus', headerName: 'Estatus', width: 140 },
      { field: 'texto', headerName: 'Descripción', width: 300 },
      { field: 'fecha', headerName: 'Fecha', width: 200 },
      { field: 'DN', headerName: 'MDN', width: 130 },
     
    ];

    const [rows, setRows] = useState(tabla);


  return (
   
      
        <DataGrid
        size="small"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      
  
  
  )
})

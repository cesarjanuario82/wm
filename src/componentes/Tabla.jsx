
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const Tabla = React.memo( ({tabla}) => {

    console.log('TABLA: ', tabla);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id Mensaje</TableCell>
            <TableCell align="right">MDN</TableCell>
            <TableCell align="right">Estatus</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Mensaje</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabla.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id_mensaje}
              </TableCell>
              <TableCell align="right">{row.mdn}</TableCell>
              <TableCell align="right">{row.estatus}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.mensaje}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  
  )
})

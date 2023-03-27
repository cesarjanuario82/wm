import { useRef, useState } from "react";


export const Head = ({seleccion}) => {



const dato = useRef('envio')


const irEnvio = () => {
    dato.current = 'envio';
    seleccion(dato.current)
}

const irReportes = () => {
    dato.current = 'reportes';
    seleccion(dato.current)
}


  return (
    <div name="maindiv" id="maindiv"> 
            <button onClick={irEnvio} className="boton48">Envio</button> 
            <button onClick={irReportes} className="boton48" >Reportes</button> 
     </div>
  )
}

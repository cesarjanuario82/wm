import { useMemo, useState } from "react";
import { useServices } from "../services/useServices";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Tabla } from "./Tabla";


export const Reportes = () => {

  const [dn, setDn] = useState({
    "mdn": ''
    });

  const [ numero, setNumero ] = useState('');
const [ respuesta, setRespuesta ] = useState(false);
const [ error, setError ] = useState(false);
const [ warning, setWarning ] = useState(false);
const [ data, setData ] = useState({});

  const {solicitarReporte, isLoading } = useServices();

  

  const consultarDn = async() =>{
    if( numero.trim().length < 10 || numero.trim().length > 10) {
      setWarning(true);
  }else{
        const resultadoReporte = await solicitarReporte(numero);
        if(resultadoReporte){

          if(resultadoReporte.status){
              setError(true);
              console.log('Error en el envio');
          }else{
              setRespuesta(true);
              setData(resultadoReporte)
              console.log('Data recibida');
          }
          
      } else {
          setError(true);
          console.log('Error en el envio');
      }
  }
    
  }

  const onInputChange = (event) => {
    const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
        setWarning(false);
        setNumero(event.target.value)
        setDn({
            mdn:'52'+event.target.value,
        })
      }
    
}

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    consultarDn()
    }
};

  return (
    <div className="row">

        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
            <h2>Consultando...</h2>
        </Backdrop>

        {
            error && 
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={error}
            >
                <Alert variant="filled" severity="error" onClose={() => {setError(false)}}>Error en el envio, intenta más tarde</Alert>
            </Backdrop>
            
            
        }   
       <div className="col-md-12">
       <legend><span className="number">1</span>Consulta de MDN</legend>
        
        <label>Número Celular:</label>
        {
          warning &&
          <Alert variant="filled" severity="warning">
              Número invalido, revisa e intenta de nuevo
          </Alert>
        }
        
        <input type="tel"  value={numero} className="inputCel2"  onChange={ onInputChange } onKeyDown={handleKeyDown} maxLength="10" />
        

        
        
        <button type="button" className="btnConsulta" onClick={consultarDn}> Consultar</button>
       </div>

{
  respuesta && <Tabla tabla={data}/>
}

       
      




    </div>
  )
}

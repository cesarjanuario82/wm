import { useState } from "react"
import { useServices } from "../services/useServices";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


export const Envio = () => {

 

const [data, setData] = useState({
    "plantilla_id":'renovaciones',
    "mdn":'',
    "phone_number_id":"112370725135077"
    
});


const {enviarMensaje, isLoading } = useServices();

const [ numero, setNumero ] = useState('');
const [ respuesta, setRespuesta ] = useState(false);
const [ error, setError ] = useState(false);
const [ warning, setWarning ] = useState(false);

const onInputChange = (event) => {
    const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
        setWarning(false);
        setNumero(event.target.value)
        setData({
            ...data,
            mdn:'52'+event.target.value,
        })
      }
    
}

const onSelectChange = ({ target }) => {
    setData({
        ...data,
        plantilla_id:target.value,
    })
}

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        enviarData()
      }
  };

const enviarData = async () => {
    if( numero.trim().length < 10 || numero.trim().length > 10) {
        setWarning(true);
    }else{
        setNumero('');
        setWarning(false);
        console.log('lo que se enviara: ', data);
        const respuestaEnvio = await enviarMensaje(data);
        
        if(respuestaEnvio){

            if(respuestaEnvio.status){
                setError(true);
                console.log('Error en el envio');
            }else{
                setRespuesta(true);
                console.log('Data enviada');
            }
            
        } else {
            setError(true);
            console.log('Error en el envio');
        }
    }
}




  return (
    <div className="row">
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
            <h2>Enviando...</h2>
        </Backdrop>

        {
            respuesta && 
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={respuesta}
            >
                <Alert  variant="filled" severity="success" onClose={() => {setRespuesta(false)}}>Mensaje enviado correctamente</Alert>
            </Backdrop>
            
            
        }

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
        <div className="titulo"> Envio WhatsApp </div>
        
        <fieldset>
          
          <legend><span className="number">1</span>Configuración de envio</legend>
        
          <label>Numero Celular:</label>
          {
            warning &&
            <Alert variant="filled" severity="warning">
                Número invalido, revisa e intenta de nuevo
            </Alert>
          }
          
          <input type="tel"  value={numero} className="inputCel"  onChange={ onInputChange } onKeyDown={handleKeyDown} maxLength="10" />
          

          <label>Tipo Envio:</label>
          <select onChange={ onSelectChange } onKeyDown={handleKeyDown}>
            
              <option value="renovaciones">Renovaciones</option>
              <option value="recomienda_gana">Recomienda y Gana</option>        
          </select>

          
        </fieldset>
             
        <button onClick={enviarData} >Enviar Mensaje</button>

        
      
        </div>


         
    </div>
  )
}

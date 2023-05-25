

import { useState } from 'react';
import './App.css'
import { Envio } from './componentes/Envio'
import { Head } from './componentes/Head'
import { Reportes } from './componentes/Reportes'

function App() {

  console.log('version:8 - se agrega servicio de reportes y tabla');

const [datos, estableceDatos] = useState('envio');

const hijoAPadre = (datoshijo) => {
  estableceDatos(datoshijo);
}


  return (
    <div className="App">
      
      <Head seleccion={hijoAPadre}/>
      
        {
          datos == 'envio'
          ? <Envio/>
          :<Reportes/>
        } 
    
      
     
      
    </div>
  )
}

export default App

import axios from 'axios';
import { useState } from 'react';



export const useServices = () => {

    const [isLoading, setIsLoading] = useState( false );

const urlApi = 'https://9a67-201-130-57-145.ngrok.io/sendMessage';
//const urlApi = 'http://a02ec208d011f48d59ba0d60f5a6bc5b-606437320.us-east-2.elb.amazonaws.com:7051/sendMessage';

const urlApiReporte ='https://cesarjanuario82.github.io/tiendas/reportewm.json';

const enviarMensaje = (payload)  => {

    setIsLoading(true);

  const request =   {
        url: urlApi,
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        data: payload,
    }
   
    console.log('REQ: ', request);
    const result =axios(request)
    .then(response => {
        console.log('servicio responde: ', response.data);
        setIsLoading(false);
            return response.data;
        })
        .catch((error) => {
            setIsLoading(false);
            console.error('servicio error: ',error);
            return error.response;
        });
    return result;
};


const solicitarReporte = (dn) => {

    const request =   {
        url: urlApiReporte,
        //method: 'POST',
        method: 'GET',//aqui lo puse GET solo para consumir un array de objetos externo para simular
        headers: {
        'Content-Type': 'application/json',
        },
        //data: dn,
    }
   
    console.log('REQ REPORTE: ', request);
    const result =axios(request)
    .then(response => {
       // console.log('servicio reporte responde: ', response.data);
        setIsLoading(false);
            return response.data;
        })
        .catch((error) => {
            setIsLoading(false);
            console.error('servicio reporte error: ',error);
            return error.response;
        });

    return result;
}



  
return {
        enviarMensaje,
        solicitarReporte,
        isLoading
}
}

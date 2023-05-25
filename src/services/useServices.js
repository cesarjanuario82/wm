import axios from 'axios';
import { useState } from 'react';



export const useServices = () => {

    const [isLoading, setIsLoading] = useState(false);

const urlApi = 'https://cc2a-192-151-180-180.ngrok-free.app/sendMessage';

const urlReporte = 'https://cc2a-192-151-180-180.ngrok-free.app/readMessages/521'
//const urlReporte = 'https://cesarjanuario82.github.io/payment/reporte2.json'

const enviarMensaje = (payload)  => {

        setIsLoading(true);


        const request = {
            method: 'post',
            headers: {
            'ngrok-skip-browser-warning':'allow',
            'Content-Type': 'application/json',
            },
            url: urlApi,
            data: payload
        }



        let result = axios(request)
            .then(response => {
                console.log('servicio responde: ', response.data);
                setIsLoading(false);
                return response.data;
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('servicio error: ', error);
                return error.response;
            });
        return result;
    };


const solicitarReporte = (dn) => {

    setIsLoading(true);

    const request =   {
       // url: `https://db81-192-151-180-180.ngrok-free.app/readMessages/521${dn}`,
       url: urlReporte+dn,
        //url: urlReporte,
        method: 'GET',
        headers: {
        'ngrok-skip-browser-warning':'allow',
        'Content-Type': 'application/json',
        },
        //data: dn,
    }
   
    console.log('REQ REPORTE: ', request);
    const result =axios(request)
    .then(response => {
 
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

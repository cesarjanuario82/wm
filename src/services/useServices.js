import axios from 'axios';
import { useState } from 'react';



export const useServices = () => {
  
    const [isLoading, setIsLoading] = useState( false );


   const urlApi = 'https://9a67-201-130-57-145.ngrok.io/sendMessage';
    //const urlApi = 'https://myfakeapi.com/api/users/';

const enviarMensaje = (payload)  => {

    setIsLoading(true);

  const request =   {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*'},
        url: urlApi,
        data: payload
      }
   
    
    
    let result =axios(request)
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
  
return {
        enviarMensaje,
        isLoading
}
}

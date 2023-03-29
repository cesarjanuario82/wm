import axios from 'axios';
import { useState } from 'react';



export const useServices = () => {
  
    const [isLoading, setIsLoading] = useState( false );


   //const urlApi = 'https://9a67-201-130-57-145.ngrok.io/sendMessage';
const urlApi = 'http://a02ec208d011f48d59ba0d60f5a6bc5b-606437320.us-east-2.elb.amazonaws.com:7051/sendMessage';
//const urlApi = 'https://paymentboxiot.att.com.mx/paymentboxiot/pss/getTokenPPSS/';
//const urlApi = 'https://api.giphy.com/v1/gifs/search?api_key=EZXEbt77aJM3kd12HvYBOGZAwyvd0jAQ&q=goku&limit=10&offset=0&rating=g&lang=es';

const enviarMensaje = (payload)  => {

    setIsLoading(true);

      const request = {
        url: urlApi,
        method: 'POST',
        data: payload,
    }

//   const request =   {
//         url: urlApi,
//         method: 'POST',
//         headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//         },
//         data: payload,
//     }

//   const request =   {
//         url: urlApi,
//         method: 'GET',
//     }

    // const request =   {
    //     url: urlApi,
    //     method: 'POST',
    //     headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     },
    //     data: {
    //         "username":"m16645",
    //         "channelId":19,
    //         "accessTokenId":"UZix2DwD1oxsK2n"},
    // }

    // const request =   {
    //     url: urlApi,
    //     method: 'POST',
    //     data: {
    //         "plantilla_id": "renovaciones",
    //         "mdn": "525530302387",
    //         "phone_number_id": "112370725135077"
    //         },
    // }
   
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
  
return {
        enviarMensaje,
        isLoading
}
}

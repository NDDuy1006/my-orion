import axios, { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

const axiosClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosClient.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer `;

    return config;

});

// axiosClient.interceptors.response.use(
//     (res: AxiosResponse) => res,
//     (error: AxiosError) => {
//         const { data, status, config } = error.response!;
//         switch (status){
//             case 400:
//                 console.error(data);
//                 break;
//             case 401:
//                 console.error('unauthorization!');
//                 break;
//             case 404:
//                 console.error('not found');
//                 break;
//             case 500:
//                 console.error(error);
//                 break;
//         } 
//         return Promise.reject(error);
//     }
// )


export default axiosClient;
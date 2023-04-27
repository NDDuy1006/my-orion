import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    },
});


axiosClient.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer `;

    return config;

});


export default axiosClient;
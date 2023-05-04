import axios, { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYU5ndW9pRHVuZyI6IjRiOWM3ZTYzLTE0NTktNGUyNC04YzAyLTVjMmRmM2UwOTdiZCIsInRhaUtob2FuIjoiYWRtaW4iLCJtYXRLaGF1IjoiJDJiJDEwJGJEdW04bVpqdzFqNllKc0dGMlhybU9CVzh2SW9mV1RlaVNWL3hubVhQV0pGQklXYU51OHkuIiwiaGluaEFuaCI6IjE2ODI2NjM2NjI1NjVfdGVjaC0yLmpwZyIsImhvVGVuIjoiTmd1eeG7hW4gVGhhbmggVGnhur9uIiwic29EVCI6IjA3ODgyNDY5NzkiLCJlbWFpbCI6InRoYW5odGllbjIwOTRAZ2FtYWlsLmNvbSIsIm1hTG9haU5ndW9pRHVuZyI6IjgzMTg4OTRkLTQ2YWYtNDgyZi1hYWNlLWU1ZTMwYTg0MGUxYiIsImNyZWF0ZUF0IjoiMjAyMy0wNC0yOFQwNjozNDoyMi42NTlaIiwidXBkYXRlQXQiOiIyMDIzLTA0LTI4VDA2OjM0OjIyLjY1OVoiLCJ1c2VyX3R5cGUiOnsibWFMb2FpTmd1b2lEdW5nIjoiODMxODg5NGQtNDZhZi00ODJmLWFhY2UtZTVlMzBhODQwZTFiIiwibG9haU5ndW9pRHVuZyI6ImFkbWluIn0sImlhdCI6MTY4MjY2MzcwMSwiZXhwIjoxNzE0MjIxMzAxfQ.nap3l1-MTYSFVuCqn0InrVSShVqhKREyxJ9nTKFj_w0',
    },
});


axiosClient.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer `;

    return config;

});

axiosClient.interceptors.response.use(
    (res: AxiosResponse) => res,
    (error: AxiosError) => {
        const { data, status, config } = error.response!;
        switch (status){
            case 400:
                console.error(data);
                break;
            case 401:
                console.error('unauthorization!');
                break;
            case 404:
                console.error('not found');
                break;
            case 500:
                console.error(error);
                break;
        } 
        return Promise.reject(error);
    }
)


export default axiosClient;
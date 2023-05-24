import axios from 'axios';

export * from './axiosClient';
export * from './requester/index';


export const fetcherLocation = async () => {
    try {

        const res = await axios.get('http://localhost:3000/api/location');

        return res.data

    } catch (err) {
        console.error(err);
    };
};
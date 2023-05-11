import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';
import { cookiesKey } from '@/constants';

export const config = {
    api: {
        bodyParser: false
    }
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {

    if (req.method !== 'POST') return res.status(404).json({ message: 'NOT FOUND' });

    const cookies = new Cookies(req, res);
    cookies.set(cookiesKey.ACCESS_TOKEN);

    res.status(200).json({message: 'Logout success!'})
};

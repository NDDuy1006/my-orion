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

    return new Promise((resolve) => {

        req.headers.cookie = '';

        const loginResponse: ProxyResCallback = (proxyRes, req, res) => {

            try {

                let body = ''
                proxyRes.on('data', (chunk) => {
                    body += chunk
                });

                proxyRes.on('end', () => {

                    const { token, expiredAt } = JSON.parse(body).data;

                    const cookies = new Cookies(req, res, {secure: process.env.NODE_ENV === 'production'});

                    cookies.set(cookiesKey.ACCESS_TOKEN, token, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expiredAt)
                    });
                    ;(res as NextApiResponse).status(200).json({ data: { token, expiredAt }, msg: 'Login success!' })
                })

            } catch (err) {
                ;(res as NextApiResponse).status(500).json(err);
            };
            resolve(true)
        };

        proxy.on('proxyRes', loginResponse);

        proxy.web(req, res, {
            target: process.env.NEXT_APP_API_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        });

    });
};

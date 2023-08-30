// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy';
import { resolve } from 'path';
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer();
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    return new Promise((resolve) => {
        //convert cookies to header Authorization 
        const cookies = new Cookies(req, res) ;
        const accessToken = cookies.get('access_token');
        if(cookies.get('access_token')){
            req.headers.Authorization  = `Bearer ${accessToken}`
        }
        req.headers.cookie = '';

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: false
        })
        proxy.once('proxyRes', () => {
            resolve(true)
        })
    })

}
export const config = {
    api: {
        bodyParser: false
    }
}
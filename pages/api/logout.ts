// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer();
export const config = {
    api: {
        bodyParser: false
    }
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== 'POST') {
        return res.status(400).json({ name: 'method not support' });
    }
    const cookies = new Cookies(req, res);
    cookies.set('access_token');
    res.status(200).json({message: 'logout successfully'});

}

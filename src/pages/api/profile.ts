// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const resData = {
    "data": {
        "id": "112323",
        "name": "anonymous",
        "email": "anonymous@gmail.com",
        "password": "admin",
        "gender": "freemale",
        "age": 20
    }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(resData);
}

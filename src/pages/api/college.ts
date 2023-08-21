// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function college(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method==='POST'){
        
        res.status(200).json({ message: 'post' })
    } else{
        res.json({message:'get'})
    }
}

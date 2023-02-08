// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export function fetchAPI(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ftch = fetch('localhost:3000/api/hello')
}
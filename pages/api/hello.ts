// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  age: number
  text: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const age = Number(req.query?.age || 18) || 18;
  const rawData = await fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1");
  const data = await rawData.json();
  res.status(200).json({ name: 'John Doe', age, text:  data.text})
}

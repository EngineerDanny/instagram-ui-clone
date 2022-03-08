// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// The Backend should basically be storage => local storage, database => sqlite
// The database will be filled with items
// User should be able to add or remove items from it
// Everything should be done locally

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

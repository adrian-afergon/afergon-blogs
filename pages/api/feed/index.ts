import {NextApiRequest, NextApiResponse} from "next";
import {generateRssFeed} from "../../../src/repositories/posts/feed.repository";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PUT':
      await generateRssFeed()
      res.status(200).json({ message: 'feed generated correctly' })
      break;
    default:
      res.setHeader('Allow', ['PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
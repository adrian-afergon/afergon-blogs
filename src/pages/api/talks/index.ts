import {NextApiRequest, NextApiResponse} from 'next'
import {getTalks} from "@/lib/talks/infrastructure/talks.repository";

const talks = (req: NextApiRequest, res: NextApiResponse) => {
  getTalks()
    .then((talks) => {
      res.json(talks)
    })
    .catch((error) => {
      res.json({ error })
    })
}

export default talks
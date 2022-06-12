import {NextApiRequest, NextApiResponse} from 'next'
import {getTalks} from "../../../src/repositories/talks/talks.repository";

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
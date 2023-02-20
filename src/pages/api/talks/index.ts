import {NextApiRequest, NextApiResponse} from 'next'
import { TalksNotionRepository } from "@/lib/talks/infrastructure/talks.notion.repository";

const talks = (req: NextApiRequest, res: NextApiResponse) => {
  new TalksNotionRepository().getTalks()
    .then((talks) => {
      res.json(talks)
    })
    .catch((error) => {
      res.json({ error })
    })
}

export default talks

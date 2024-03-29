import {NextApiRequest, NextApiResponse} from 'next'
import {getResources} from "@/lib/resources/infrastructure/resources.repository";

const resources = (req: NextApiRequest, res: NextApiResponse) => {
  getResources().then((snapshot) => {
    res.json(snapshot)
  })
    .catch((error) => {
      res.json({error})
    })
}

export default resources

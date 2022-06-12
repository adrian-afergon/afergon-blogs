import {NextApiRequest, NextApiResponse} from 'next'
import {getResources} from "../../../src/repositories/resources/resources.repository";

const resources = (req: NextApiRequest, res: NextApiResponse) => {
  getResources().then((snapshot) => {
    res.json(snapshot)
  })
    .catch((error) => {
      res.json({error})
    })
}

export default resources

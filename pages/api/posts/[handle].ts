import {NextApiRequest, NextApiResponse} from 'next'
import {getPost} from "./posts.repository";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const {query: {handle}} = req

  getPost(handle)
    .then((post) => {
      res.json(post)
    })
    .catch((error) => {
      res.json({error})
    })

}

export default handle

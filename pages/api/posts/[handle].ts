import {NextApiRequest, NextApiResponse} from 'next'
import {getPost} from "../../../src/repositories/posts/posts.repository";

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

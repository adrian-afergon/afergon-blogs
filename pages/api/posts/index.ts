import {NextApiRequest, NextApiResponse} from 'next'
import {getPosts} from "./posts.repository";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
  getPosts()
    .then(res.json)
    .catch((error) => {
      res.json({error})
    })
}

export default posts

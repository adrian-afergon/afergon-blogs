import {NextApiRequest, NextApiResponse} from 'next'
import {getPosts} from "./posts.repository";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
  getPosts()
    .then((posts) => {
      res.json(posts)
    })
    .catch((error) => {
      res.json({error})
    })
}

export default posts

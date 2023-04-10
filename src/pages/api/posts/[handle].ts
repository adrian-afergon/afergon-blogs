import {NextApiRequest, NextApiResponse} from 'next'
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const {query: {handle}} = req

  if (!handle) {
    res.status(400)
    res.json({message: "No params"})
    return
  }

  PostsFactoryRepository.getInstance().getPost(handle)
    .then((post) => {
      res.json(post)
    })
    .catch((error) => {
      res.json({error})
    })

}

export default handle

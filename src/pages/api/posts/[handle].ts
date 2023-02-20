import {NextApiRequest, NextApiResponse} from 'next'
import {postsFirebaseRepository} from "@/lib/posts/infrastructure/posts.firebase.repository";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const {query: {handle}} = req

  if (!handle) {
    res.status(400)
    res.json({message: "No params"})
    return
  }

  postsFirebaseRepository.getPost(handle)
    .then((post) => {
      res.json(post)
    })
    .catch((error) => {
      res.json({error})
    })

}

export default handle

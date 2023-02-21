import {NextApiRequest, NextApiResponse} from 'next'
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
    const postRepository = PostsFactoryRepository.getInstance()
    postRepository.getPosts()
        .then(res.json)
        .catch((error) => {
            res.json({error})
        })
}

export default posts

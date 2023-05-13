import {NextApiRequest, NextApiResponse} from 'next'
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";
import {getPosts} from "@/lib/posts/application/get-posts";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
    const postRepository = PostsFactoryRepository.getInstance(process.env.STORAGE ?? '')
  getPosts(postRepository)()
        .then(res.json)
        .catch((error) => {
            res.json({error})
        })
}

export default posts

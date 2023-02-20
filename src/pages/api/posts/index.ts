import {NextApiRequest, NextApiResponse} from 'next'
import {PostsNotionRepository} from "@/lib/posts/infrastructure/posts.notion.repository";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
    const postRepository = new PostsNotionRepository()
    postRepository.getPosts()
        .then(res.json)
        .catch((error) => {
            res.json({error})
        })
}

export default posts

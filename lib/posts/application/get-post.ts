import {PostsRepository} from "@/lib/posts/application/posts.repository";

export const getPost = (postsRepository: PostsRepository) => async (handle: string | string[]) => {
    return await postsRepository.getPost(handle)
}

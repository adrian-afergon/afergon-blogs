import {PostsRepository} from "@/lib/posts/application/posts.repository";

export const getPosts = (postsRepository: PostsRepository) => async () => {
  return await postsRepository.getPosts()
}

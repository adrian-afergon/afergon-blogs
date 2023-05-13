import {PostsRepository} from "@/lib/posts/application/posts.repository";

export const getAllFilePaths = (postsRepository: PostsRepository) => async () => {
  return await postsRepository.getAllFilePaths()
}

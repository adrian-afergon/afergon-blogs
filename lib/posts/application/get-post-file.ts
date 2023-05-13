import {PostFileParams, PostsRepository} from "@/lib/posts/application/posts.repository";

export const getPostFile = (postsRepository: PostsRepository) => async (params: PostFileParams) => {
  return await postsRepository.getPostFile(params)
}

import { Post } from "../models/post";
import { posts } from '../../data.json';

export interface PostsRepository {
  getPosts: () => Promise<Post[]>
  getPost: (handle: string) => Promise<Post>
}

export const postsRepository: PostsRepository = {
  getPosts: () => Promise.resolve(posts),
  getPost: (handle) => {
    const post = posts.find((post: Post) => post.handle === handle)
    return post ? Promise.resolve(post) : Promise.reject('Not found');
  }
};

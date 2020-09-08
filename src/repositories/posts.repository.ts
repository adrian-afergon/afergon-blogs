import { Post } from "../models/post";

const mapPost = (data: any): Post => ({
  date: new Date(data.date * 1000),
  external: data.external,
  handle: data.handle,
  intro: data.intro,
  link: data.link,
  locale: data.locale,
  title: data.title,
  type: data.type,
  locales: data.locales
});

export interface PostsRepository {
  getPosts: () => Promise<Post[]>
}

export const postsRepository: PostsRepository = {
  getPosts: async () => {
    const res = await fetch('/api/posts');
    const data: Array<any> = await res.json();
    return data.map(mapPost);
  },
};

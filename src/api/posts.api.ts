import { Post } from '../models/post'

const mapPost = (data: any): Post => ({
  date: data.date * 1000,
  external: data.external,
  handle: data.handle,
  intro: data.intro,
  link: data.link,
  locale: data.locale,
  title: data.title,
  type: data.type,
  locales: data.locales
})

export interface PostsApi {
  getPosts: () => Promise<Post[]>
  getPostByHandle: (handle: string) => Promise<Post>
}

export const postsRepository: PostsApi = {
  getPosts: async () => {
    const res = await fetch('/api/posts')
    const data: Array<any> = await res.json()
    return data.map(mapPost)
  },
  getPostByHandle: async (handle: string) => {
    const res = await fetch(`/api/posts/${handle}`)
    const data: any = await res.json()
    return mapPost(data)
  }
}

import {Post} from "@/lib/posts/domain/post";
import {PostFile} from "@/lib/posts/domain/post-file";

export type MarkdownParams = {locale: string, postName: string}

export type PostId = string

export interface PostsRepository {
    getPosts: () => Promise<Post[]>
    getPost: (handle: string | string []) => Promise<Post | undefined>
    getPostFile: (params: MarkdownParams) => Promise<PostFile>
    getAllFilePaths: () => Promise<string[]>
}

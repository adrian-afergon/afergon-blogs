import {Post} from "@/lib/posts/domain/post";
import {PostFile} from "@/lib/posts/domain/post-file";

export type PostFileParams = {locale: string, postName: string}

export interface PostsRepository {
    getPosts: () => Promise<Post[]>
    getPost: (handle: string | string []) => Promise<Post | undefined>
    getPostFile: (params: PostFileParams) => Promise<PostFile>
    getAllFilePaths: () => Promise<string[]>
}

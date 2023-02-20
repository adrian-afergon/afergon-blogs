import {Post} from "@/lib/posts/domain/post";

export interface PostFile {
    post: Post,
    metadata: { [p: string]: any }
    markdownBody: string
}

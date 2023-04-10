import {Post} from "@/lib/posts/domain/post";
import {PostId} from "@/lib/posts/domain/posts.repository";

export interface PostFile {
    post: Post & {id: PostId},
    metadata: { [p: string]: any }
    markdownBody: string
}

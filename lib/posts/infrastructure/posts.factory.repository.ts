import {PostsFirebaseRepository} from "@/lib/posts/infrastructure/posts.firebase.repository";
import {PostsNotionRepository} from "@/lib/posts/infrastructure/posts.notion.repository";
import {PostsRepository} from "@/lib/posts/application/posts.repository";

export class PostsFactoryRepository {
    static getInstance(type: string): PostsRepository {
        switch (type) {
            case 'firebase':
                return new PostsFirebaseRepository()
            case 'notion':
                return new PostsNotionRepository()
            default:
                return new PostsNotionRepository()
        }
    }
}

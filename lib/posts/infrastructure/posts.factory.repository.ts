import {PostsFirebaseRepository} from "@/lib/posts/infrastructure/posts.firebase.repository";
import {PostsNotionRepository} from "@/lib/posts/infrastructure/posts.notion.repository";
import {PostsRepository} from "@/lib/posts/domain/posts.repository";

export class PostsFactoryRepository {
    static getInstance(): PostsRepository {
        switch (process.env.STORAGE) {
            case 'firebase':
                return new PostsFirebaseRepository()
            case 'notion':
                return new PostsNotionRepository()
            default:
                return new PostsNotionRepository()
        }
    }
}

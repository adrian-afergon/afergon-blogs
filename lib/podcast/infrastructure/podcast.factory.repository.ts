import {podcastFirebaseRepository} from "@/lib/podcast/infrastructure/podcast.firebase.repository";
import {PodcastNotionRepository} from "@/lib/podcast/infrastructure/podcast.notion.repository";
import {PodcastRepository} from "@/lib/podcast/application/podcast.repository";

export class PodcastFactoryRepository {
    static getInstance(type: string): PodcastRepository {
        switch (type) {
            case 'firebase':
                return podcastFirebaseRepository
            case 'notion':
                return new PodcastNotionRepository()
            default:
                return new PodcastNotionRepository()
        }
    }
}

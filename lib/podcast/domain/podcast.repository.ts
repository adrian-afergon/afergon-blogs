import {Podcast} from "@/lib/podcast/domain/podcast";

export interface PodcastRepository {
    getPublishedEpisodesSorted: () => Promise<Podcast[]>
}

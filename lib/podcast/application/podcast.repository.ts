import {Podcast} from "@/lib/podcast/domain/podcast";

export type Params = {
    numberOfElements: number
    startAt: number
}

export interface PodcastRepository {
    getPublishedEpisodesSorted: (params: Params) => Promise<Podcast[]>
}

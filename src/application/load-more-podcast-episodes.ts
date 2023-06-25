import {loadMorePodcastEpisodes} from "@/repositories/podcast.repository";
import {Podcast} from "@/lib/podcast/domain/podcast";

export const loadMorePodcastEpisodesUseCase = async (cursor: number, limit: number): Promise<Podcast[]> => {
  return await loadMorePodcastEpisodes(cursor, limit)
}

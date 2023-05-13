import {loadMorePodcastEpisodes} from "@/repositories/podcast.repository";

export const loadMorePodcastEpisodesUseCase = async (cursor: number, limit: number) => {
  return await loadMorePodcastEpisodes(cursor, limit)
}

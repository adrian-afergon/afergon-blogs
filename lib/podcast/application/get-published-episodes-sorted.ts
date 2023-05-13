import {PodcastRepository} from "@/lib/podcast/application/podcast.repository";

export const getPublishedEpisodesSorted = (podcastRepository: PodcastRepository) => async () => {
  return await podcastRepository.getPublishedEpisodesSorted();
}

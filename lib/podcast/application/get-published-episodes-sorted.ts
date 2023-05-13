import {PodcastRepository} from "@/lib/podcast/application/podcast.repository";

type QueryParams = {
  numberOfElements: number
  startAt: number
}

export const getPublishedEpisodesSorted = (podcastRepository: PodcastRepository) => async (params: QueryParams) => {
  return await podcastRepository.getPublishedEpisodesSorted(params);
}

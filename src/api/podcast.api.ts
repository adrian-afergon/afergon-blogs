import {Podcast} from "../models/podcast";

const mapPodcast = (data: any): Podcast => ({
  episodeNumber: data.episodeNumber,
  episodeTitle: data.episodeTitle,
  link: data.linl,
  published: data.published
})

export interface PodcastApi {
  getPodcasts: () => Promise<Podcast[]>
}

export const podcastApi: PodcastApi = {
  getPodcasts: async () => {
    const res = await fetch('/api/podcast')
    const data: Array<any> = await res.json()
    return data.map(mapPodcast)
  },
}
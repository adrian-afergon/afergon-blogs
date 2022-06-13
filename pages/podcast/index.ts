import { PodcastPage as Podcast } from '../../src/views/podcast/podcast'
import {getEpisodes} from "../../src/repositories/podcast/podcast.repository";

// @ts-ignore
export async function getServerSideProps({ _, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const episodes = await getEpisodes()

  const sortedEpisodes = episodes.sort((a,b) => a.episodeNumber - b.episodeNumber).reverse()
  return { props: { episodes: sortedEpisodes } }
}

export default Podcast

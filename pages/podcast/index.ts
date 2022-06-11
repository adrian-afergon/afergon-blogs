import { PodcastPage as Podcast } from '../../src/views/podcast/podcast'
import {getEpisodes} from "../api/podcast/podcast.repository";

// @ts-ignore
export async function getServerSideProps({ _, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const data = getEpisodes().sort((a,b) => a.episodeNumber - b.episodeNumber).reverse()
  return { props: { data } }
}

export default Podcast

import { PodcastPage as Podcast } from '../../views/podcast/podcast'
import {PodcastFactoryRepository} from "@/lib/podcast/infrastructure/podcast.factory.repository";

// @ts-ignore
export async function getServerSideProps({ _, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const episodes = await PodcastFactoryRepository.getInstance().getPublishedEpisodesSorted()

  return { props: { episodes } }
}

export default Podcast

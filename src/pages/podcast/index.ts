import {PodcastPage as Podcast} from '../../views/podcast/podcast'
import {PodcastFactoryRepository} from "@/lib/podcast/infrastructure/podcast.factory.repository";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getPublishedEpisodesSorted} from "@/lib/podcast/application/get-published-episodes-sorted";

// @ts-ignore
export async function getServerSideProps({locale, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const podcastRepository = PodcastFactoryRepository.getInstance(process.env.STORAGE ?? "");
  const episodes = await getPublishedEpisodesSorted(podcastRepository)()

  return {
    props: {
      episodes,
      ...(await serverSideTranslations(locale ?? 'en', [
        'podcast', 'common'
      ])),

    }
  }
}

export default Podcast

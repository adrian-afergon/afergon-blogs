import {PodcastPage as Podcast} from '../../views/podcast/podcast'
import {PodcastFactoryRepository} from "@/lib/podcast/infrastructure/podcast.factory.repository";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

// @ts-ignore
export async function getServerSideProps({locale, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const episodes = await PodcastFactoryRepository.getInstance().getPublishedEpisodesSorted()

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

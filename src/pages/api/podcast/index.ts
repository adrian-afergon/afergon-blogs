import {NextApiRequest, NextApiResponse} from "next";
import {getPublishedEpisodesSorted} from "@/lib/podcast/application/get-published-episodes-sorted";
import {PodcastFactoryRepository} from "@/lib/podcast/infrastructure/podcast.factory.repository";

const posts = async (req: NextApiRequest, res: NextApiResponse) => {
  const podcastRepository = PodcastFactoryRepository.getInstance(process.env.STORAGE ?? '')
  const {startAt = '0', numberOfElements = '10'} = req.query

  res.json(await getPublishedEpisodesSorted(podcastRepository)({
    startAt: Number(startAt),
    numberOfElements: Number(numberOfElements)
  }))
}

export default posts

import {NextApiRequest, NextApiResponse} from "next";
import {getPublishedEpisodesSorted} from "@/lib/podcast/infrastructure/podcast.firebase.repository";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
      res.json(getPublishedEpisodesSorted)
}

export default posts

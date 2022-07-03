import {NextApiRequest, NextApiResponse} from "next";
import {getPublishedEpisodesSorted} from "../../../src/repositories/podcast/podcast.repository";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
      res.json(getPublishedEpisodesSorted)
}

export default posts
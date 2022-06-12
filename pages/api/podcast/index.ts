import {NextApiRequest, NextApiResponse} from "next";
import {getEpisodes} from "../../../src/repositories/podcast/podcast.repository";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
      res.json(getEpisodes)
}

export default posts
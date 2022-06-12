import {NextApiRequest, NextApiResponse} from 'next'
import {getResource} from "./resources.repository";

const filename = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    getResource(req.query.filename).then(([data, [metadata]]) => {
      res.setHeader('Content-disposition', `filename=${req.query.filename}`)
      res.setHeader('Content-Type', metadata.contentType)
      res.send(data[0])
    })
  } catch (error) {
    res.send(error)
  }
}

export default filename

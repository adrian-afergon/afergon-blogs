import {NextApiRequest, NextApiResponse} from 'next'
import {getResource} from "@/lib/resources/infrastructure/resources.repository";

const filename = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.filename) {
    res.status(400)
    res.json({message: "No filename"})
    return
  }

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

import { NextApiRequest, NextApiResponse } from 'next'
import { firebaseInstance } from '../../../lib/firebase'

const filename = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const file = firebaseInstance.storage.bucket().file(`resources/${req.query.filename}`)
    Promise.all([
      file.download(),
      file.getMetadata()
    ]).then(([data, [metadata]]) => {
      res.setHeader('Content-disposition', `filename=${req.query.filename}`)
      res.setHeader('Content-Type', metadata.contentType)
      res.send(data[0])
    })
  } catch (error) {
    res.send(error)
  }
}

export default filename

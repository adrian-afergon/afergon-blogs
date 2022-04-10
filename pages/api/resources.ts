import { NextApiRequest, NextApiResponse } from 'next'
import firebase from '../../lib/firebase'

const resources = (req: NextApiRequest, res: NextApiResponse) => {
  firebase
    .ref('/resources')
    .once('value')
    .then((snapshot) => {
      res.json(snapshot.val())
    })
    .catch((error) => {
      res.json({ error })
    })
}

export default resources

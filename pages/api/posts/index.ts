import { NextApiRequest, NextApiResponse } from 'next'
import firebase from '../../../lib/firebase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  firebase
    .ref('/posts')
    .once('value')
    .then((snapshot) => {
      res.json(snapshot.val())
    })
    .catch((error) => {
      res.json({ error })
    })
}

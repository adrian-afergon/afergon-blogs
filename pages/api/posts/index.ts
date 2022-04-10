import { NextApiRequest, NextApiResponse } from 'next'
import firebase from '../../../lib/firebase'

const posts = (req: NextApiRequest, res: NextApiResponse) => {
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

export default posts

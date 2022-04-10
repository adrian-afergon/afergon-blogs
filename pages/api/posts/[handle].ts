import { NextApiRequest, NextApiResponse } from 'next'
import firebase from '../../../lib/firebase'

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { handle } } = req

  firebase.ref('/posts')
    .orderByChild('handle')
    .equalTo(handle as string)
    .limitToFirst(1)
    .once('value')
    .then((snapshot) => {
      snapshot.forEach(child => {
        res.json(child.val())
      })
    })
    .catch((error) => {
      res.json({ error })
    })
}

export default handle

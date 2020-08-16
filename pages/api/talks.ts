import firebase from '../../lib/firebase';

export default (req: any, res: any) => {
  firebase
    .ref('/talks')
    .once('value')
    .then((snapshot) => {
      res.json(snapshot.val());
    })
    .catch((error) => {
      res.json({ error });
    });
};

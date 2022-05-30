import firebase from "../../../lib/firebase";
import {Post} from "../../../src/models/post";

const mapPost = (data: any): Post => ({
  date: data.date * 1000,
  external: data.external,
  handle: data.handle || null,
  intro: data.intro || '',
  link: data.link,
  locale: data.locale,
  title: data.title,
  type: data.type,
  locales: data.locales || null
})

export const getPosts = async (): Promise<Post[]> => {
  return firebase
    .ref('/posts')
    .once('value')
    .then((snapshot) => snapshot.val().map(mapPost))
}

export const getPost = async (handle: string | string []): Promise<Post[]> => {
  const result: Post[] = []
  const snapShot = await firebase.ref('/posts')
    .orderByChild('handle')
    .equalTo(handle as string)
    .limitToFirst(1)
    .once('value')

  snapShot.forEach(item => {
    result.push(item.val() as Post)
  })

    return result
}
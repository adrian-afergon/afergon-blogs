import firebase, {firebaseInstance} from "../../../lib/firebase";
import matter from "gray-matter";
import {Post} from "../../models/post";

interface MarkdownParams {locale: string, postName: string}

export const getFilesAtDirectory = async (path: string) => {
  const [[, ...esFilesOnDirectory]] = await firebaseInstance.storage.bucket().getFiles({ prefix: path })
  return esFilesOnDirectory
}

export const getPosts = async (): Promise<Post[]> => {
  const snapshot = await firebase
    .ref('/posts')
    .once('value')
  return snapshot.val()
}

const getMarkdownFile = async ({locale, postName}: MarkdownParams) => {
  const file = firebaseInstance.storage.bucket().file(`posts/${locale}/${postName}.md`)
  const [buffer] = await file.download()
  return matter(buffer)
}

export const getPost = async (handle: string | string []): Promise<Post> => {
  const result: Post[] = []
  const snapShot = await firebase.ref('/posts')
    .orderByChild('handle')
    .equalTo(handle as string)
    .limitToFirst(1)
    .once('value')

  snapShot.forEach(item => {
    result.push(item.val() as Post)
  })

  return result[0]
}

export const getPostFile = async (params: MarkdownParams) => {
  const [{data, content}, post] = await Promise.all([
    getMarkdownFile(params),
    getPost(params.postName)
  ])

  return {
    post,
    metadata: data,
    markdownBody: content
  }

}
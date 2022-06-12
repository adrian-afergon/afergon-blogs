import firebase, {firebaseInstance} from "../../../lib/firebase";
import matter from "gray-matter";
import {Post} from "../../../src/models/post";

interface MarkdownParams {locale: string, postName: string}

export const getFilesAtDirectory = async (path: string) => {
  const [[, ...esFilesOnDirectory]] = await firebaseInstance.storage.bucket().getFiles({ prefix: path })
  return esFilesOnDirectory
}

export const getBlogPostsData = async () => {
  const [spanishFiles, englishFiles] = await Promise.all(
    ['es', 'en']
      .map((locale) => getFilesAtDirectory(`posts/${locale}/`))
  )
  const downloadedFiles = await Promise.all([...spanishFiles, ...englishFiles]
    .map(file => file.download()))

  return downloadedFiles
    .map(([buffer]) => {
      const {data, content} = matter(buffer)
      return {
        ...data,
        slug: 'TODO'
      }
    })
}

export const getPosts = async () => {
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

const getPost = async (handle: string | string []): Promise<Post> => {
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
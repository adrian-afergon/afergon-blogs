import firebase, {firebaseInstance} from "../../common/infrastructure/datasource/firebase";
import matter from "gray-matter";
import {Post} from "../domain/post";
import {MarkdownParams, PostsRepository} from "@/lib/posts/domain/posts.repository";
import {PostFile} from "@/lib/posts/domain/post-file";

export class PostsFirebaseRepository implements PostsRepository {

  private mapPost = (data: any): Post => ({
    date: data.date * 1000,
    external: data.external,
    handle: data.handle || null,
    summary: data.summary || '',
    link: data.link,
    title: data.title,
    locales: data.locales || null
  })

  private async getMarkdownFile({locale, postName}: MarkdownParams) {
    const file = firebaseInstance.storage.bucket().file(`posts/${locale}/${postName}.md`)
    const [buffer] = await file.download()
    return matter(buffer)
  }

  private getFilesAtDirectory = async (path: string) => {
    const [[, ...esFilesOnDirectory]] = await firebaseInstance.storage.bucket().getFiles({ prefix: path })
    return esFilesOnDirectory
  }

  async getPost(handle: string | string[]): Promise<Post | undefined> {
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

  async getPostFile(params: MarkdownParams): Promise<PostFile> {
    const [{data, content}, post] = await Promise.all([
      this.getMarkdownFile(params),
      this.getPost(params.postName)
    ])

    if(!post) {
      throw new Error('Element not found')
    }

    return {
      post: {...post, id: params.postName},
      metadata: data,
      markdownBody: content
    }

  }

  async getPosts(): Promise<Post[]> {
    const snapshot = await firebase
        .ref('/posts')
        .once('value')
    return snapshot.val().map(this.mapPost)
  }

  async getAllFilePaths (): Promise<string[]> {
    const [esFilesOnDirectory, enFilesOnDirectory] = await Promise.all(
        ['es', 'en']
            .map((locale) => this.getFilesAtDirectory(`posts/${locale}/`))
    )

    const getHandle = (filePath: string) => filePath.split('.md')[0]
    return [...esFilesOnDirectory, ...enFilesOnDirectory].map((file) => getHandle(`/${file.name}`))
  }

}

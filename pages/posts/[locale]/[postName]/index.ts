import { PostPage } from '../../../../src/views/post/post'
import {firebaseInstance} from "../../../../lib/firebase";
import matter from "gray-matter";


export async function getStaticProps ({ ...ctx }) {
  const { postName, locale } = ctx.params
  const file = firebaseInstance.storage.bucket().file(`posts/${locale}/${postName}.md`)
  const [buffer] = await file.download()
  const { data, content } = matter(buffer)

  return {
    props: {
      postName,
      metadata: data,
      markdownBody: content
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const [[, ...esFilesOnDirectory]] = await firebaseInstance.storage.bucket().getFiles({ prefix: 'posts/es/' })
  const [[, ...enFilesOnDirectory]] = await firebaseInstance.storage.bucket().getFiles({ prefix: 'posts/en/' })
  const getHandle = (filePath: string) => filePath.split('.md')[0]
  const paths = [...esFilesOnDirectory, ...enFilesOnDirectory].map((file) => getHandle(`/${file.name}`))
  return {
    paths,
    fallback: false
  }
}

export default PostPage

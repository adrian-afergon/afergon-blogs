import {PostPage} from '../../../../src/views/post/post'
import {getFilesAtDirectory, getPostFile} from "../../../../src/repositories/posts/posts.repository";
import {generateRssFeed} from "../../../../src/repositories/posts/feed.repository";

export async function getStaticProps({...ctx}) {

  const [{post, metadata, markdownBody}] = await Promise.all([
    getPostFile(ctx.params),
    //TODO: this is a temporary solution for generation RSS
    generateRssFeed()
  ])

  return {
    props: {
      post,
      metadata,
      markdownBody
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const [esFilesOnDirectory, enFilesOnDirectory] = await Promise.all(
    ['es', 'en']
      .map((locale) => getFilesAtDirectory(`posts/${locale}/`))
  )

  const getHandle = (filePath: string) => filePath.split('.md')[0]
  const paths = [...esFilesOnDirectory, ...enFilesOnDirectory].map((file) => getHandle(`/${file.name}`))
  return {
    paths,
    fallback: false
  }
}

export default PostPage

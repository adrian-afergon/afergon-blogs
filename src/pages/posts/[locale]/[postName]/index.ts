import {PostPage} from '../../../../views/post/post'
import {postsFirebaseRepository} from "@/lib/posts/infrastructure/posts.firebase.repository";
import {generateRssFeed} from "@/lib/posts/infrastructure/feed.repository";
import {PostsNotionRepository} from "@/lib/posts/infrastructure/posts.notion.repository";

export async function getStaticProps({...ctx}) {

  console.log('params', ctx.params)
  const [{post, metadata, markdownBody}] = await Promise.all([
    new PostsNotionRepository().getPostFile(ctx.params),
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
      .map((locale) => postsFirebaseRepository.getFilesAtDirectory(`posts/${locale}/`))
  )

  const getHandle = (filePath: string) => filePath.split('.md')[0]
  const paths = [...esFilesOnDirectory, ...enFilesOnDirectory].map((file) => getHandle(`/${file.name}`))
  return {
    paths,
    fallback: false
  }
}

export default PostPage

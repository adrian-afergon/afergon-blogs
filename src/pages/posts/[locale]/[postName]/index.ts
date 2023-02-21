import {PostPage} from '../../../../views/post/post'
import {generateRssFeed} from "@/lib/posts/infrastructure/feed.repository";
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";

export async function getStaticProps({...ctx}) {

  const [{post, metadata, markdownBody}] = await Promise.all([
    PostsFactoryRepository.getInstance().getPostFile(ctx.params),
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
  // const paths = await postsFirebaseRepository.getAllFilePaths()
  const paths = await PostsFactoryRepository.getInstance().getAllFilePaths()
  return {
    paths,
    fallback: false
  }
}

export default PostPage

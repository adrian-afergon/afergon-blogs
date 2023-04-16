import {PostPage} from '../../../../views/post/post'
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";

export async function getStaticProps({...ctx}) {
  return {
    redirect: {
      permanent: true,
      destination: `/${ctx.params.locale}/blog/${ctx.params.postName}`
    }
  }
}

export async function getStaticPaths() {
  const paths = await PostsFactoryRepository.getInstance().getAllFilePaths()
  return {
    paths,
    fallback: true
  }
}

export default PostPage

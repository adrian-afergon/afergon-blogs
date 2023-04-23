import {PostPage} from '../../../../views/post/post'

export async function getStaticProps({...ctx}) {
  return {
    redirect: {
      permanent: true,
      destination: `/${ctx.params.locale}/blog/${ctx.params.postName}`
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export default PostPage

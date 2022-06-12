import {Articles} from "../../src/views/articles"
import {getTalks} from "../../src/repositories/talks/talks.repository";
import {getPosts} from "../../src/repositories/posts/posts.repository";
import {Article} from "../../src/models/article";

// @ts-ignore
export async function getServerSideProps({_, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const [posts, talks] = await Promise.all<Article[]>([
    getPosts(),
    getTalks()
  ])


  return {props: {articles: [...posts, ...talks]}}
}

export default Articles

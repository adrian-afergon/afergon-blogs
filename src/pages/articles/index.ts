import {Articles} from "../../views/articles"
import {getTalks} from "@/lib/talks/infrastructure/talks.repository";
import {getPosts} from "@/lib/posts/infrastructure/posts.repository";
import {Article} from "@/models/article";

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

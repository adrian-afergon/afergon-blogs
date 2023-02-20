import {Articles} from "../../views/articles"
import {PostsNotionRepository} from "@/lib/posts/infrastructure/posts.notion.repository";
import {TalksNotionRepository} from "@/lib/talks/infrastructure/talks.notion.repository";
import {Post} from "@/lib/posts/domain/post";
import {Talk} from "@/lib/talks/domain/talk";

// @ts-ignore
export async function getServerSideProps({_, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const [posts, talks] = await Promise.all<Array<Post | Talk>>([
    new PostsNotionRepository().getPosts(),
    new TalksNotionRepository().getTalks()
  ])

  const typesPosts = posts.map((item) => ({...item, type: 'Post'}))
  const typesTalks = talks.map((item) => ({...item, type: 'Talk'}))
  return {props: {articles: [...typesPosts, ...typesTalks]}}
}

export default Articles

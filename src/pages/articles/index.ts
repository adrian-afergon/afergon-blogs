import {Articles} from "../../views/articles"
import {TalksNotionRepository} from "@/lib/talks/infrastructure/talks.notion.repository";
import {Post} from "@/lib/posts/domain/post";
import {Talk} from "@/lib/talks/domain/talk";
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

// @ts-ignore
export async function getServerSideProps({locale, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const [posts, talks] = await Promise.all<Array<Post | Talk>>([
    PostsFactoryRepository.getInstance().getPosts(),
    new TalksNotionRepository().getTalks()
  ])

  const typesPosts = posts.map((item) => ({...item, type: 'Post'}))
  const typesTalks = talks.map((item) => ({...item, type: 'Talk'}))

  return {
    props: {
      articles: [...typesPosts, ...typesTalks],
      ...(await serverSideTranslations(locale ?? 'en', [
        'articles', 'common'
      ])),
    }
  }
}

export default Articles

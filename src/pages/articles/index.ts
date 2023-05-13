import {Articles} from "../../views/articles"
import {TalksNotionRepository} from "@/lib/talks/infrastructure/talks.notion.repository";
import {Post} from "@/lib/posts/domain/post";
import {Talk} from "@/lib/talks/domain/talk";
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getPosts} from "@/lib/posts/application/get-posts";
import {getTalks} from "@/lib/talks/application/get-talks";

// @ts-ignore
export async function getServerSideProps({locale, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const postsRepository = PostsFactoryRepository.getInstance(process.env.STORAGE ?? '');
  const talksRepository = new TalksNotionRepository();
  const [posts, talks] = await Promise.all<Array<Post | Talk>>([
    getPosts(postsRepository)(),
    getTalks(talksRepository)(),
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

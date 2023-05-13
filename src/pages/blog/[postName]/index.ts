import {PostPage} from '../../../views/post/post'
import {generateRssFeed} from "@/lib/posts/infrastructure/generate-rss-feed";
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import {config} from "@/config";
import {getPostFile} from "@/lib/posts/application/get-post-file";
import {getAllFilePaths} from "@/lib/posts/application/get-all-file-path";


export const getStaticProps: GetStaticProps<{}> = async ({locale, ...ctx}) => {
  if (!ctx.params) throw new Error('Params are not defined')
  const postsRepository = PostsFactoryRepository.getInstance(process.env.STORAGE ?? '');
  const [{post, metadata, markdownBody}] = await Promise.all([
    getPostFile(postsRepository)({
      locale: locale ?? config.DEFAULT_LOCALE,
      postName: ctx.params.postName as string
    }),
    //TODO: this is a temporary solution for generation RSS
    generateRssFeed()
  ])
  return {
    props: {
      post,
      metadata,
      markdownBody,
      ...(await serverSideTranslations(locale ?? config.DEFAULT_LOCALE, [
        'common'
      ])),
    },
    revalidate: 1
  }
};

export async function getStaticPaths() {
  const postsRepository = PostsFactoryRepository.getInstance(process.env.STORAGE ?? '');
  const paths = await getAllFilePaths(postsRepository)()

  return {
    paths,
    fallback: true
  }
}

export default PostPage

import {PostPage} from '../../../views/post/post'
import {generateRssFeed} from "@/lib/posts/infrastructure/feed.repository";
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";


export const getStaticProps: GetStaticProps<{}> = async ({locale, ...ctx}) => {
  if(!ctx.params) throw new Error('Params are not defined')
  const [{post, metadata, markdownBody}] = await Promise.all([
    PostsFactoryRepository.getInstance().getPostFile({locale: locale ?? '', postName: ctx.params.postName as string}),
    //TODO: this is a temporary solution for generation RSS
    generateRssFeed()
  ])
  return {
    props: {
      post,
      metadata,
      markdownBody,
      ...(await serverSideTranslations(locale ?? 'en', [
        'common'
      ])),
    },
    revalidate: 1
  }
};

export async function getStaticPaths() {
  const paths = await PostsFactoryRepository.getInstance().getAllFilePaths()
  return {
    paths,
    fallback: true
  }
}

export default PostPage

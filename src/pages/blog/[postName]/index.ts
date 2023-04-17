import {PostPage} from '../../../views/post/post'
import {generateRssFeed} from "@/lib/posts/infrastructure/feed.repository";
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import {config} from "@/config";


export const getStaticProps: GetStaticProps<{}> = async ({locale, ...ctx}) => {
  if(!ctx.params) throw new Error('Params are not defined')

  try {
    const [{post, metadata, markdownBody}] = await Promise.all([
      PostsFactoryRepository.getInstance().getPostFile({locale: locale ?? config.DEFAULT_LOCALE, postName: ctx.params.postName as string}),
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
  } catch (e) {
    console.error('Error', e)
    return {
      notFound: true
    }
  }
};

export async function getStaticPaths() {
  const paths = await PostsFactoryRepository.getInstance().getAllFilePaths()

  console.log('paths', paths)

  return {
    paths,
    fallback: true
  }
}

export default PostPage

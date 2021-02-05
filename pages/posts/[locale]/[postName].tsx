import * as React from 'react'
import '../post.scss'
import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { Layout } from '../../../src/components/Layout'
import { CodeBlock } from '../../../src/components/CodeBlock'
import { firebaseInstance } from '../../../lib/firebase'
import { postsRepository } from '../../../src/repositories/posts.repository'
import { Post } from '../../../src/models/post'
import { ToggleLocale } from '../../../src/components/ToggleLocale'

interface PostPageProps {
  metadata: any,
  markdownBody: any,
  postName?: string
}

const PostPage:React.FC<PostPageProps> = ({ postName, metadata, markdownBody }) => {
  if (!metadata) return <></>

  const [post, setPost] = React.useState<Post>()
  React.useEffect(() => {
    if (postName) {
      postsRepository.getPostByHandle(postName).then((data) => {
        console.log(data)
        setPost(data)
      })
    }
  }, [postName])

  return (
    <Layout>
      <Head>
        <title>{metadata.author} - {metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AdrianFerrera91" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <article>
        { post?.locales && <ToggleLocale locales={post.locales} /> }
        <ReactMarkdown source={markdownBody} renderers={{ code: CodeBlock }}/>
      </article>
    </Layout>
  )
}

export async function getStaticProps ({ ...ctx }) {
  const { postName, locale } = ctx.params
  const file = firebaseInstance.storage.bucket().file(`posts/${locale}/${postName}.md`)
  const [buffer] = await file.download()
  const { data, content } = matter(buffer)

  return {
    props: {
      postName,
      metadata: data,
      markdownBody: content
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const [[, ...esFilesOnDirectory]] = await firebaseInstance.storage.bucket().getFiles({ prefix: 'posts/es/' })
  const [[, ...enFilesOnDirectory]] = await firebaseInstance.storage.bucket().getFiles({ prefix: 'posts/en/' })
  const getHandle = (filePath: string) => filePath.split('.md')[0]
  const paths = [...esFilesOnDirectory, ...enFilesOnDirectory].map((file) => getHandle(`/${file.name}`))
  return {
    paths,
    fallback: false
  }
}

export default PostPage

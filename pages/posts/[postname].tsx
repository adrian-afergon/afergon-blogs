import * as React from 'react';
import './post.scss';
import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { Layout } from "../../src/components/Layout";

interface PostPageProps {
  metadata: any,
  markdownBody: any
}

const PostPage:React.FC<PostPageProps> = ({ metadata, markdownBody }) => {
  if (!metadata) return <></>

  return (
    <Layout>
      <Head>
        <title>{metadata.author} - {metadata.title}</title>
      </Head>
      <article>
        <ReactMarkdown source={markdownBody} />
      </article>
    </Layout>
  )
};

export default PostPage;

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const data = matter(content.default)

  return {
    props: {
      metadata: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) =>
    context.keys().map((key, index) =>
      key.replace(/^.*[\\\/]/, "").slice(0, -3)
    ))(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/posts/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

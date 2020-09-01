import * as React from 'react';
import './post.scss';
import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { Layout } from "../../src/components/Layout";
import { CodeBlock } from "../../src/components/CodeBlock";
import { firebaseInstance } from "../../lib/firebase";

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
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AdrianFerrera91" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <article>
        <ReactMarkdown source={markdownBody} renderers={{ code: CodeBlock }}/>
      </article>
    </Layout>
  )
};

export async function getStaticProps({ ...ctx }) {
  const { postName } = ctx.params

  const file = firebaseInstance.storage.bucket().file(`posts/${postName}.md`);
  const [buffer] = await file.download();
  const {data, content} = matter(buffer);

  return {
    props: {
      metadata: data,
      markdownBody: content,
    },
  }
}

export async function getStaticPaths() {
  const [[,...filesOnDirectory]] = await firebaseInstance.storage.bucket().getFiles({prefix: 'posts/' });
  const getHandle = (filePath: string) => filePath.split('.md')[0];
  const paths = filesOnDirectory.map((file) => getHandle(`/${file.name}`))
  return {
    paths,
    fallback: false,
  }
}

export default PostPage;

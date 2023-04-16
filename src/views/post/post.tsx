import * as React from 'react'
import styles from './post.module.scss'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { CodeBlock } from '@/components/CodeBlock'
import { Post } from '@/lib/posts/domain/post'

interface PostPageProps {
  metadata: any,
  markdownBody: any,
  postName?: string,
  post: Post
}

export const PostPage:React.FC<PostPageProps> = ({ metadata, markdownBody, post = null }) => {
  if (!metadata || !post) return <></>
  return (
    <Layout>
      <Head>
        <title>{metadata.author} - {metadata.title}</title>
        <meta name="author" content="Adrián Ferrera" />
        <meta name="keywords" content={post.tags.join(', ')}/>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="Technology"/>
        <meta property="og:article:author" content="Adrián Ferrera"/>
        <meta property="og:url" content=""/>
        <meta property="og:site_name" content="Adrian Ferrera Blog" />
        <meta property="og:locale" content={post.locales[0]}/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AdrianFerrera91" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        {Object.entries(post.hrefLang).map(([locale, href]) => {
          return <link rel="alternate" href={href} hrefLang={locale} key={locale}/>
        })}
      </Head>
      <article className={styles.article}>
        {/*{ post.locales && <ToggleLocale locales={post.locales} handle={post.handle || ''}/> }*/}
        <ReactMarkdown components={{
          code ({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match
              ? <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')}/>
              : <code className={className} {...props}>
                {children}
              </code>
          }
        }}>{markdownBody}</ReactMarkdown>
      </article>
    </Layout>
  )
}

export default PostPage

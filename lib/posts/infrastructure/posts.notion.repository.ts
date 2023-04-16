import {MarkdownParams, PostId, PostsRepository} from "@/lib/posts/domain/posts.repository";
import {Post} from "@/lib/posts/domain/post";
import {PostFile} from "@/lib/posts/domain/post-file";
import * as process from "process";
import {NotionDatasource} from "@/lib/common/infrastructure/datasource/notion";
import {PostNotFoundError} from "@/lib/posts/domain/errors";

export class PostsNotionRepository implements PostsRepository {

  locales: Record<string, string> = {
    ['Spanish']: 'es',
    ['English']: 'en'
  }

  constructor(
    private readonly database: string = process.env.NOTION_BLOG_DATABASE || '',
    private readonly notionDatasource: NotionDatasource = new NotionDatasource()
  ) {
  }

  async getAllFilePaths(): Promise<any[]> {
    const databaseResponse = await this.notionDatasource.queryDatabase(this.database, {
      property: 'Path',
      rich_text: {
        is_not_empty: true
      }
    })

    return databaseResponse.results
      .map(item =>
        ({
          params: {
            // @ts-ignore
            postName: item.properties.Path?.rich_text[0]?.plain_text,
            // @ts-ignore
            locale: this.locales[item.properties.Locale.select.name]
          }
        })
      )
  }

  async getPost(handle: string | string[], locale?: string): Promise<(Post & { id: PostId }) | undefined> {
    const databaseResponse = await this.notionDatasource.queryDatabase(this.database, {
      and: [
        {
          property: 'Type',
          select: {
            equals: 'Post'
          },
        },
        {
          property: 'Status',
          status: {
            equals: 'Publish'
          }
        },
        {
          property: 'Path',
          rich_text: {
            equals: handle
          }
        }

      ],
    })

    const item = databaseResponse.results.find((result: any) =>
      this.locales[result.properties.Locale.select.name] === locale
    )

    if (!item) {
      throw new PostNotFoundError(`Not found post with hande: ${handle} and locale: ${locale}`)
    }

    // @ts-ignore
    const authors = await Promise.all(item.properties.Authors.relation.map((author: any) =>
      this.notionDatasource.queryPage(author.id)
    ))
    const authorNames = authors.map((item: any) =>
      item.properties.Name.title[0].text.content
    )

    return {
      id: item.id,
      // @ts-ignore
      title: item.properties.Name.title[0].text.content,
      summary: '',
      // @ts-ignore
      date: item.properties.Date.date.start,
      // @ts-ignore
      locales: [item.properties.Locale.select.name],
      link: this.createUrl(item),
      // @ts-ignore
      external: Boolean(item.properties.ExternalLink.url),
      // @ts-ignore
      handle: item.properties.Path?.rich_text[0]?.plain_text || '',
      // @ts-ignore
      authors: authorNames.join(','),
      // @ts-ignore
      image: item.properties.Image.url,
      // @ts-ignore
      description: item.properties.Description.rich_text[0].plain_text,
      // @ts-ignore
      tags: item.properties.Tags.multi_select.map((tag: any) => tag.name),
      // split url only by first occurrence of /
      // @ts-ignore
      hrefLang: this.extractHrefLang(item.properties["href-lang"].rich_text[0]?.planText ?? '')
    }
  }

  async getPostFile(params: MarkdownParams): Promise<PostFile> {

    const post = await this.getPost(params.postName, params.locale)
    // TODO: this is an smell
    if (!post) {
      throw new PostNotFoundError(`Not found element with params: ${params}`)
    }

    const markdownBody = await this.notionDatasource.getMarkDownFromPage(post.id)

    return {
      post,
      metadata: {
        title: post.title,
        // @ts-ignore
        description: post.description,
        // @ts-ignore
        author: post.authors,
        date: post.date,
        // @ts-ignore
        image: post.image,
      },
      markdownBody
    }
  }

  private extractHrefLang(url: string) {
    const slashPosition = 4 // Eg:https://domain.com/
    const langArray = url.split('/', slashPosition)
    const lang = langArray[langArray.length - 1]
    return {[lang]: url}
  }

  async getPosts(): Promise<Post[]> {
    const databaseResponse = await this.notionDatasource.queryDatabase(this.database, {
      and: [
        {
          property: 'Type',
          select: {
            equals: 'Post'
          },
        },
        {
          property: 'Status',
          status: {
            equals: 'Publish'
          }
        },
      ],
    })

    return databaseResponse.results.map((item: any) => ({
      title: item.properties.Name.title[0].text.content,
      summary: '',
      date: item.properties.Date.date.start,
      locales: [item.properties.Locale.select.name],
      link: this.createUrl(item),
      external: Boolean(item.properties.ExternalLink.url),
      handle: item.properties.Path?.rich_text[0]?.plain_text || '',
      tags: item.properties.Tags.multi_select.map((tag: any) => tag.name),
      // split url only by first occurrence of /
      hrefLang: this.extractHrefLang(item.properties["href-lang"].rich_text[0]?.planText ?? '')
    }))
  }

  private createUrl(item: any): string {
    return Boolean(item.properties.ExternalLink.url)
      ? item.properties.ExternalLink.url
      : `/${this.locales[item.properties.Locale.select.name]}/blog/${item.properties.Path?.rich_text[0]?.plain_text}`

  }

}

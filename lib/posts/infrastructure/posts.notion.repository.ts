import {MarkdownParams, PostId, PostsRepository} from "@/lib/posts/domain/posts.repository";
import {Post} from "@/lib/posts/domain/post";
import {PostFile} from "@/lib/posts/domain/post-file";
import * as process from "process";
import {File} from "@google-cloud/storage";

export class PostsNotionRepository implements PostsRepository {

    constructor(
        private readonly key: string = process.env.NOTION_API_KEY || '',
        private readonly database: string = process.env.NOTION_BLOG_DATABASE || '',
    ) {
    }


    private async fetcher(url: string, method = 'GET', body?: string) {
        return fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${this.key}`,
                'Notion-version': '2022-06-28',
                'Content-type': 'application/json'
            },
            body
        });
    }

    async getPost(handle: string | string[]): Promise<(Post & { id: PostId }) | undefined> {

        const res = await this.fetcher(
            `https://api.notion.com/v1/databases/${this.database}/query`,
            'POST',
            JSON.stringify({
                filter: {
                    and: [
                        {
                            property: 'Type',
                            'select': {
                                equals: 'Post'
                            },
                        },
                        {
                            property: 'Status',
                            'status': {
                                equals: 'Publish'
                            }
                        },
                        {
                            property: 'Path',
                            'rich_text': {
                                equals: handle
                            }
                        }

                    ],
                }
            })
        );
        const database = await res.json();
        const item = database.results[0]
        return ({
            id: item.id,
            title: item.properties.Name.title[0].text.content,
            summary: '',
            date: item.properties.Date.date.start,
            locales: [item.properties.Locale.select.name],
            link: this.createUrl(item),
            external: Boolean(item.properties.ExternalLink.url),
            handle: item.properties.Path?.rich_text[0]?.plain_text || '',
        })
        // return (await this.getPosts()).find(post => post.handle === handle)
    }

    async getPostFile(params: MarkdownParams): Promise<PostFile> {

        const post = await this.getPost(params.postName)
        // TODO: this is an smell
        if (!post) {
            throw new Error('Post not found')
        }
        const response = await this.fetcher(`https://api.notion.com/v1/pages/${post.id}`)

       const foo = await response.json()

        console.log(foo)
        // const [{data, content}, post] = await Promise.all([
        //     getMarkdownFile(params),
        //     this.getPost(params.postName)
        // ])


        return {
            post,
            metadata: [],
            markdownBody: ''
        }
    }

    async getPosts(): Promise<Post[]> {
        const res = await this.fetcher(
            `https://api.notion.com/v1/databases/${this.database}/query`,
            'POST',
            JSON.stringify({
                filter: {
                    and: [
                        {
                            property: 'Type',
                            'select': {
                                equals: 'Post'
                            },
                        },
                        {
                            property: 'Status',
                            'status': {
                                equals: 'Publish'
                            }
                        },

                    ],
                }
            })
        );
        const database = await res.json();
        console.log([database])
        return database.results.map((item: any) => ({
            title: item.properties.Name.title[0].text.content,
            summary: '',
            date: item.properties.Date.date.start,
            locales: [item.properties.Locale.select.name],
            link: this.createUrl(item),
            external: Boolean(item.properties.ExternalLink.url),
            handle: item.properties.Path?.rich_text[0]?.plain_text || '',
        }))
    }

    private createUrl(item: any): string {
        const dictionary: Record<string, string> = {
            ['Spanish']: 'es',
            ['English']: 'en'
        }

        return Boolean(item.properties.ExternalLink.url)
            ? item.properties.ExternalLink.url
            : `posts/${dictionary[item.properties.Locale.select.name]}/${item.properties.Path?.rich_text[0]?.plain_text}`

    }

    getFilesAtDirectory(path: string): Promise<File[]> {
        return Promise.reject('Not implemented yet');
    }

}

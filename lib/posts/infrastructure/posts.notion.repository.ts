import {MarkdownParams, PostsRepository} from "@/lib/posts/domain/posts.repository";
import {Post} from "@/lib/posts/domain/post";
import {PostFile} from "@/lib/posts/domain/post-file";
import * as process from "process";
import {File} from "@google-cloud/storage";
import {getMarkdownFile} from "@/lib/posts/infrastructure/posts.firebase.repository";

export class PostsNotionRepository implements PostsRepository {

    constructor(
        private readonly key: string = process.env.NOTION_API_KEY || '',
        private readonly database: string = process.env.NOTION_BLOG_DATABASE || '',
    ) {
    }


    private async fetcher(url: string, method = 'GET') {
        return fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${this.key}`,
                'Notion-version': '2022-06-28',
                'Content-type': 'application/json'
            },
        });
    }

    async getPost(handle: string | string[]): Promise<Post | undefined> {
        return (await this.getPosts()).find(post => post.handle === handle)
    }

    async getPostFile(params: MarkdownParams): Promise<PostFile> {
        const [{data, content}, post] = await Promise.all([
            getMarkdownFile(params),
            this.getPost(params.postName)
        ])

        // TODO: this is an smell
        if (!post) {
            throw new Error('Post not found')
        }

        return {
            post,
            metadata: data,
            markdownBody: content
        }
    }

    async getPosts(): Promise<Post[]> {
        const res = await this.fetcher(
            `https://api.notion.com/v1/databases/${this.database}/query`,
            'POST'
        );
        const database = await res.json();
        return database.results.map((item: any) => ({
            title: item.properties.Name.title[0].plain_text,
            summary: item.properties.intro?.rich_text[0]?.plain_text || '',
            date: item.properties.date.date.start,
            locales: item.properties.locales.multi_select.map((it: any) => it.name),
            link: item.properties.link.rich_text[0].plain_text,
            external: item.properties.external.checkbox,
            handle: item.properties.handle?.rich_text[0]?.plain_text || '',
        }))
    }

    getFilesAtDirectory(path: string): Promise<File[]> {
        return Promise.reject('Not implemented yet');
    }

}

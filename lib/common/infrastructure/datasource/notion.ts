import process from "process";
import {NotionToMarkdown} from "notion-to-md";
import {Client} from "@notionhq/client";

export class NotionDatasource {

    private readonly notionClient: Client

    constructor(private readonly key: string = process.env.NOTION_API_KEY || '') {
        this.notionClient = new Client({auth: this.key})
    }

    async queryDatabase (databaseId: string, filter?: any, sorts?: any) {
        return this.notionClient.databases.query({
            database_id: databaseId,
            filter,
            sorts
        })
    }

    async queryPage(pageId: string) {
        return this.notionClient.pages.retrieve({
            page_id: pageId
        })
    }

    async getMarkDownFromPage(pageId: string) {
        const n2m = new NotionToMarkdown({
            notionClient: this.notionClient
        })

        const markdownBlocks = await n2m.pageToMarkdown(pageId);
        return n2m.toMarkdownString(markdownBlocks);
    }
}

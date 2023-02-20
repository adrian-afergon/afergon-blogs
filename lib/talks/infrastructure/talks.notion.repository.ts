import {TalksRepository} from "@/lib/talks/domain/talks.repository";
import {Talk} from "@/lib/talks/domain/talk";
import process from "process";

export class TalksNotionRepository implements TalksRepository {

    constructor(
        private readonly key: string = process.env.NOTION_API_KEY || '',
        private readonly database: string = process.env.NOTION_TALKS_DATABASE || '',
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

    async getTalks(): Promise<Talk[]> {
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
            handle: '',
        }))
    }
}

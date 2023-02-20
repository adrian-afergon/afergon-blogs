import {TalksRepository} from "@/lib/talks/domain/talks.repository";
import {Talk} from "@/lib/talks/domain/talk";
import process from "process";

export class TalksNotionRepository implements TalksRepository {

    constructor(
        private readonly key: string = process.env.NOTION_API_KEY || '',
        private readonly database: string = process.env.NOTION_TALKS_DATABASE || '',
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

    async getTalks(): Promise<Talk[]> {
        const res = await this.fetcher(
            `https://api.notion.com/v1/databases/${this.database}/query`,
            'POST',
            JSON.stringify({
                filter: {
                    and: [
                        {
                            property: 'Type',
                            'select': {
                                equals: 'Talk'
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
        return database.results.map((item: any) => ({
            title: item.properties.Name.title[0].text.content,
            summary: '',
            date: item.properties.Date.date.start,
            locales: [item.properties.Locale.select.name],
            link: item.properties.ExternalLink.url,
            external: Boolean(item.properties.ExternalLink.url),
            handle: item.properties.Path?.rich_text[0]?.plain_text || '',
        }))
    }
}

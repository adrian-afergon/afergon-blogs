import {TalksRepository} from "@/lib/talks/domain/talks.repository";
import {Talk} from "@/lib/talks/domain/talk";
import process from "process";
import {NotionDatasource} from "@/lib/common/infrastructure/datasource/notion";

export class TalksNotionRepository implements TalksRepository {

    constructor(
        private readonly database: string = process.env.NOTION_TALKS_DATABASE || '',
        private readonly notionDatasource: NotionDatasource = new NotionDatasource()
    ) {
    }

    async getTalks(): Promise<Talk[]> {
        const databaseResponse = await this.notionDatasource.queryDatabase(this.database, {
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
        })
        //@ts-ignore
        return databaseResponse.results.map((item: any) => ({
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

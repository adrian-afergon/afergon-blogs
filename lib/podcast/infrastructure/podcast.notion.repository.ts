import {PodcastRepository} from "@/lib/podcast/domain/podcast.repository";
import {Podcast} from "@/lib/podcast/domain/podcast";
import {NotionDatasource} from "@/lib/common/infrastructure/datasource/notion";

export class PodcastNotionRepository implements PodcastRepository {

    constructor(
        private readonly database: string = process.env.NOTION_PODCAST_DATABASE ?? '',
        private readonly notionDatasource: NotionDatasource = new NotionDatasource()
    ) {
    }

    async getPublishedEpisodesSorted(): Promise<Podcast[]> {
        const databaseResponse = await this.notionDatasource.queryDatabase(this.database, {
            property: 'Status',
            status: {
                equals: 'Publish'
            },
        }, [
            {
                "property": "Date",
                "direction": "ascending"
            }
        ])
        return databaseResponse.results.map((item: any, index) => {
            return ({
                episodeNumber: index + 1,
                published: item.properties.Date.date.start,
                link: item.properties.iframe.url,
                episodeTitle: item.properties.Name.title[0].text.content
            });
        }).reverse()
    }

}

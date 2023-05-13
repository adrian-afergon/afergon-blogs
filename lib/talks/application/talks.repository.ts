import {Talk} from "@/lib/talks/domain/talk";

export interface TalksRepository {
    getTalks: () => Promise<Talk[]>
}

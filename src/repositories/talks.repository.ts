import { Talk } from '../models/talk'

export interface TalksRepository {
  getTalks: () => Promise<Talk[]>
}

const mapTalk = (data: any): Talk => ({
  date: new Date(data.date * 1000),
  external: data.external,
  handle: data.handle,
  intro: data.intro,
  link: data.link,
  locale: data.locale,
  title: data.title,
  type: data.type,
  places: data.places,
  video: data.video,
  locales: data.locales
})

export const talksRepository: TalksRepository = {
  getTalks: async () => {
    const res = await fetch('/api/talks')
    const data: Array<any> = await res.json()
    return data.map(mapTalk)
  }
}

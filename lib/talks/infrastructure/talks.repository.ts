import {Talk} from "../domain/talk";
import firebase from "../../common/infrastructure/datasource/firebase";

const mapTalk = (data: any): Talk => ({
  date: data.date * 1000,
  external: data.external,
  handle: data.handle || null,
  summary: data.summary || '',
  link: data.link,
  locale: data.locale,
  title: data.title,
  type: data.type,
  places: data.places,
  video: data.video || null,
  locales: data.locales || null
})

export const getTalks = (): Promise<Talk[]> => {
  return firebase
    .ref('/talks')
    .once('value')
    .then((snapshot) => {
      return (snapshot.val().map(mapTalk))
    })
}
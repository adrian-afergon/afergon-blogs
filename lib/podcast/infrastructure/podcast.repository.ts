import {Podcast} from "../domain/podcast";
import firebase from "../../common/infrastructure/datasource/firebase";

export const getPublishedEpisodesSorted = async (): Promise<Podcast[]> => {
  const snapshot = await firebase
    .ref('/podcast/episodes')
    .orderByChild('episodeNumber')
    .once('value')
  return snapshot.val().filter((episode: Podcast) => new Date(episode.published) <= new Date()).reverse();
}
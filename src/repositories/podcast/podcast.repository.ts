import {Podcast} from "../../models/podcast";
import firebase from "../../../lib/firebase";

export const getPublishedEpisodesSorted = async (): Promise<Podcast[]> => {
  const snapshot = await firebase
    .ref('/podcast/episodes')
    .orderByChild('episodeNumber')
    .once('value')
  return snapshot.val().filter((episode: Podcast) => new Date(episode.published) <= new Date()).reverse();
}

export const getEpisodes = async (): Promise<Podcast[]> => {
  const snapshot = await firebase
    .ref('/podcast/episodes')
    .once('value')
  return snapshot.val()
}
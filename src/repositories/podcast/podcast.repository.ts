import {Podcast} from "../../models/podcast";
import firebase from "../../../lib/firebase";

export const getEpisodes = async (): Promise<Podcast[]> => {
  const snapshot = await firebase
    .ref('/podcast/episodes')
    .once('value')
  return snapshot.val()
}
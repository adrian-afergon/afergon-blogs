import firebase, {firebaseInstance} from "../../common/infrastructure/datasource/firebase";
import {Resource} from "mdast";
import {DownloadResponse} from "@google-cloud/storage";
import {MetadataResponse} from "@google-cloud/storage/build/src/nodejs-common";

export const getResources = async (): Promise<Resource[]> => {
  const snapshot = await firebase
    .ref('/resources')
    .once('value')
    return snapshot.val()
}

export const getResource = async (filename: string | string[]): Promise<[DownloadResponse, MetadataResponse]> => {
    const file = firebaseInstance.storage.bucket().file(`resources/${filename}`)
    return Promise.all([
      file.download(),
      file.getMetadata()
    ])
}
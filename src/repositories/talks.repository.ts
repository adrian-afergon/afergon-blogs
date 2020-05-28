import { Talk } from "../models/talk";
import { talks } from '../../data.json';

export interface TalksRepository {
  getTalks: () => Promise<Talk[]>
}

export const talksRepository: TalksRepository = {
  getTalks: () => Promise.resolve(talks)
};

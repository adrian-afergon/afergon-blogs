import { Talk } from "../models/talk";

export interface TalksRepository {
  getTalks: () => Promise<Talk[]>
}

export const talksRepository: TalksRepository = {
  getTalks: async() => {
    const res = await fetch('/api/talks');
    return res.json();
  }
};

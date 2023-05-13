import {TalksRepository} from "@/lib/talks/application/talks.repository";

export const getTalks = (talksRepository: TalksRepository) => async () => {
  return await talksRepository.getTalks()
}

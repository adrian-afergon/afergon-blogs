import json from './podcast.json'

export const getEpisodes = () => json.episodes || []
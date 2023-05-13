export const loadMorePodcastEpisodes = async (cursor: number, limit: number) => {
  const response = await fetch(`/api/podcast?startAt=${cursor}&numberOfElements=${limit}`);
  return await response.json();
}

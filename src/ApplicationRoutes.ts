export const ApplicationRoutes = {
  articles: '/articles',
  resources: '/resources',
  podcast: '/podcast',
  root: '/'
} as const

export const ExternalRoutes = {
  devsLives : {
    youtube: 'https://www.youtube.com/channel/UC8hcSq8ZoFG8hZrZ8XFC7Qw',
    spotify: 'https://open.spotify.com/show/1IxWSGyJfY1oAhZoucR9WO',
    amazon: 'https://music.amazon.es/podcasts/d58ee758-0be6-4bb1-afed-fcab07e613a4/devs-lives',
    tiktok: 'https://www.tiktok.com/@devslives',
    instagram: 'https://www.instagram.com/devslives',
    twitter: 'https://twitter.com/devslives',
    applePodcast: 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbThwQUhQRFdDWnJTeWdxVmpWQ0VVZlhGYkpCZ3xBQ3Jtc0tuNU5CSlBVT1FiOTVXY2p0UzNXU196Y3h5MFZTTlhtLWpyQXlWdWxHM0RSWV80aHlZbDM5eWw4UDltVkFVaU1aSm1DYnBTenhYNkszVklCMmxqc1E5TjBGdzBYYTA5YTgxNW9PR3puLXE1WTVwYTZPYw&q=https%3A%2F%2Fpodcasts.apple.com%2Fes%2Fpodcast.&v=T9Frov6wS7U',
    googlePodcast: 'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuaXZvb3guY29tL3BvZGNhc3QtZGV2cy1saXZlc19mZ19mMTE1MTU3NjJfZmlsdHJvXzEueG1s',
    iVoox: 'https://www.ivoox.com/podcast-devs-lives_sq_f11515762_1.html'
  }
}

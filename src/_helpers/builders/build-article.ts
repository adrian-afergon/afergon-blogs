import { Article } from '../../models/article'

export const buildArticle = ({
  locale = 'irrelevant locale',
  title = 'irrelevant title',
  handle = 'irrelevant handle',
  date = 0,
  external = false,
  summary = 'irrelevant intro',
  link = 'irrelevant link',
  type = 'Post',
  locales = []
}: Partial<Article> = {}): Article => ({
  title,
  locale,
  link,
  summary,
  handle,
  external,
  date,
  type,
  locales
})

import { Article } from '../../models/article'

export const buildArticle = ({
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
  link,
  summary,
  handle,
  external,
  date,
  type,
  locales
})

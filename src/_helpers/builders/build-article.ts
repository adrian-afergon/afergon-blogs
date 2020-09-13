import { Article } from "../../models/article";

export const buildArticle = ({
  locale = 'irrelevant locale',
  title = 'irrelevant title',
  handle = 'irrelevant handle',
  date = new Date(0),
  external = false,
  intro = 'irrelevant intro',
  link = 'irrelevant link',
  type = 'Post',
  locales = []
}: Partial<Article>): Article => ({
  title,
  locale,
  link,
  intro,
  handle,
  external,
  date,
  type,
  locales
});

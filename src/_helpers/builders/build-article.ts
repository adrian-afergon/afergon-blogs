import { Article } from "../../models/article";

export const buildArticle = ({
  locale = 'irrelevant locale',
  title = 'irrelevant title',
  handle = 'irrelevant handle',
  date = '0, Jan 2020',
  external = false,
  intro = 'irrelevant intro',
  link = 'irrelevant link',
  type = 'Post'
}: Partial<Article>): Article => ({
  title,
  locale,
  link,
  intro,
  handle,
  external,
  date,
  type
});

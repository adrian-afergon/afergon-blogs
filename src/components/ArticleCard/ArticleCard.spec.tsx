import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ArticleCard} from './';
import { ArticleCardText } from "./ArticleCard";
import { Article } from "../../models/article";

const buildArticle = ({
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

describe('ArticleCard', () => {
  it('shows an external link', () => {
    const view: RenderResult = render(
      <ArticleCard item={buildArticle({external: true})}/>,
    );
    expect(view.queryByLabelText(ArticleCardText.EXTERNAL_LINK)).toBeInTheDocument();
  });

  it('hides an external link', () => {
    const view: RenderResult = render(
      <ArticleCard item={buildArticle({})}/>,
    );
    expect(view.queryByLabelText(ArticleCardText.EXTERNAL_LINK)).not.toBeInTheDocument();
  });

});

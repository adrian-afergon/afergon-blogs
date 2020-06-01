import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ArticleCard} from './';
import { Post } from "../../models/post";
import { ArticleCardText } from "./ArticleCard";

const buildPost = ({
  locale = 'irrelevant locale',
  title = 'irrelevant title',
  handle = 'irrelevant handle',
  date = '0, Jan 2020',
  external = false,
  intro = 'irrelevant intro',
  link = 'irrelevant link',
}: Partial<Post>): Post => ({
  title,
  locale,
  link,
  intro,
  handle,
  external,
  date
});

describe('ArticleCard', () => {
  it('shows an external link', () => {
    const view: RenderResult = render(
      <ArticleCard item={buildPost({external: true})}/>,
    );
    expect(view.queryByLabelText(ArticleCardText.EXTERNAL_LINK)).toBeInTheDocument();
  });

  it('hides an external link', () => {
    const view: RenderResult = render(
      <ArticleCard item={buildPost({})}/>,
    );
    expect(view.queryByLabelText(ArticleCardText.EXTERNAL_LINK)).not.toBeInTheDocument();
  });

});

import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ArticleCard} from './';
import { ArticleCardText } from "./ArticleCard";
import { buildArticle } from "../../_helpers/builders/build-article";

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

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { ArticleCard } from './ArticleCard'
import { Article } from "../../models/article";
import { buildArticle } from "../../_helpers/builders/build-article";

const stories = storiesOf('ArticleCard', module);
stories.addDecorator(withKnobs);

stories.add('with article', () => {

  const article: Article = buildArticle({
    date: text('Date', 'date'),
    external: boolean('External', true),
    handle: 'irrelevant',
    intro: text('Intro', 'Amazing and descriptive text'),
    link: '/',
    locale: text('Locale', 'Spanish'),
    title: text('Title', 'Post title'),
    type: "Post"
  })

  return (
      <ArticleCard item={article}/>
  );
});

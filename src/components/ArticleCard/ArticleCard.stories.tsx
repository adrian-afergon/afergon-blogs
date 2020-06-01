import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { ArticleCard } from './ArticleCard'
import { Post } from "../../models/post";
import { Talk } from "../../models/talk";

const stories = storiesOf('ArticleCard', module);
stories.addDecorator(withKnobs);

stories.add('with post', () => {
  const value = text('Text value', 'Hello from ArticleCard!!');

  const post: Post = {
    date: text('Date', 'date'),
    external: boolean('External', true),
    handle: 'irrelevant',
    intro: text('Intro', 'Amazing and descriptive text'),
    link: '/',
    locale: text('Locale', 'Spanish'),
    title: text('Title', 'Post title')
  }

  return (
      <ArticleCard item={post}/>
  );
});

stories.add('with talk', () => {
  const value = text('Text value', 'Hello from ArticleCard!!');

  const post: Talk = {
    date: text('Date', 'date'),
    external: boolean('External', true),
    handle: 'irrelevant',
    intro: text('Intro', 'Amazing and descriptive text'),
    places: [],
    slides: '/',
    video: '/',
    locale: text('Locale', 'Spanish'),
    title: text('Title', 'Post title')
  }

  return (
    <ArticleCard item={post}/>
  );
});

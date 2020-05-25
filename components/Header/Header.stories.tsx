import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Header } from './Header';

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);

stories.add('with message', () => {
  const value = text('Text value', 'Hello from Header!!');
  return <Header>{value}</Header>;
});

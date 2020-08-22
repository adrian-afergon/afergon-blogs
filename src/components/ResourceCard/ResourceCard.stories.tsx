import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ResourceCard } from './ResourceCard'

const stories = storiesOf('ResourceCard', module);
stories.addDecorator(withKnobs);

stories.add('with message', () => {
  const value = text('Text value', 'Hello from ResourceCard!!');
  return (
      <ResourceCard>{value}</ResourceCard>
  );
});

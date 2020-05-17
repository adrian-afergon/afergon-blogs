---
to: src/<%= path %>/<%= name %>/<%= name %>.stories.tsx
---
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { <%= name %> } from './ConfirmationPanel';

const stories = storiesOf('<%= name %>', module);
stories.addDecorator(withKnobs);

stories.add('with message', () => {
  const value = text('Text value', 'Hello from <%= name %>!!');
  return (
      <<%= name %>>{value}</<%= name %>>
  );
});
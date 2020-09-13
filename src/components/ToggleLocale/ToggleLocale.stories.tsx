import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ToggleLocale } from './ToggleLocale'

const stories = storiesOf('ToggleLocale', module);
stories.addDecorator(withKnobs);

stories.add('with message', () => {
  const value = text('Text value', 'Hello from ToggleLocale!!');
  return (
      <ToggleLocale>{value}</ToggleLocale>
  );
});

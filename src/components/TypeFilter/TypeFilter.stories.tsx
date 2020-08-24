import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { TypeFilter } from './TypeFilter'

const stories = storiesOf('TypeFilter', module);
stories.addDecorator(withKnobs);

stories.add('with message', () => {
  const value = text('Text value', 'Hello from TypeFilter!!');
  return (
      <TypeFilter>{value}</TypeFilter>
  );
});

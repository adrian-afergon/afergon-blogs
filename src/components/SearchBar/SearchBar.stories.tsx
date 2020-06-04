import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { SearchBar } from './SearchBar'
import { action } from "@storybook/addon-actions";

const stories = storiesOf('SearchBar', module);
stories.addDecorator(withKnobs);

stories.add('with message', () => {
  const value = text('Text value', 'Hello from SearchBar!!');
  return (
      <SearchBar types={['Type 1', 'Type 2']} onChangeFilter={action('Filtering')} onChangeSelectedTypes={action('Types selected')}/>
  );
});
